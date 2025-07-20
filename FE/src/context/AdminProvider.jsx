import { createContext, useState, useEffect, useContext } from "react";
import { DataContext } from "./DataProvider";
import { AuthContext } from "./AuthProvider.jsx";

export const AdminDataContext = createContext();

export const AdminDataProvider = ({ children }) => {
  const { BASE_URL } = useContext(DataContext);
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  const [data, setData] = useState({
    doctor: [],
    patient: [],
    center: [],
    quiz: [],
    article: [],
    user: [], 
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const adminApiRequest = async (endpoint, method, body = null) => {
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: body ? JSON.stringify(body) : null,
      });

      let result;
      try {
        result = await response.json();
      } catch (jsonError) {
        console.error(`Admin API Error: Non-JSON response from ${endpoint} (${method})`, response.statusText, jsonError);
        throw new Error(`Server cavabı JSON formatında deyil: ${response.statusText}`);
      }

      if (!response.ok) {
        if ((response.status === 401 || response.status === 403) && endpoint !== 'user/login') {
          logout();
          throw new Error("Sessiyanızın müddəti bitib. Zəhmət olmasa yenidən daxil olun.");
        }
        console.error(`Admin API Error: ${endpoint} (${method}) failed with status ${response.status}`, result.message);
        throw new Error(result.message || `API sorğusu uğursuz oldu: HTTP ${response.status}`);
      }
      return { success: true, data: result.data || result }; 
    } catch (err) {
      setError(err.message);
      console.error(`Admin API Catch Error (${endpoint} ${method}):`, err.message);
      return { success: false, error: err.message };
    }
  };

  const loadAllData = async () => {
    setLoading(true);
    setError(null);
    try {
      const endpointsToFetch = ["doctor", "patient", "center", "quiz", "article", "user/all-users"]; 

      const results = await Promise.all(
        endpointsToFetch.map(endpoint => adminApiRequest(endpoint, "GET"))
      );

      const newFetchedData = {};
      endpointsToFetch.forEach((endpointName, index) => {
        const keyName = endpointName.split('/')[0]; 
        if (results[index].success) {
          newFetchedData[keyName] = results[index].data;
        } else {
          newFetchedData[keyName] = [];
          console.error(`Failed to load data for ${endpointName}:`, results[index].error);
        }
      });
      setData(newFetchedData);
      console.log("AdminProvider: Fetched and set data:", newFetchedData);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching all admin data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated && user && user.role === 'admin') {
      loadAllData();
    } else if (!isAuthenticated) {
      console.log("AdminProvider useEffect: Not authenticated, resetting data.");
      setData({ doctor: [], patient: [], center: [], quiz: [], article: [], user: [] });
      setLoading(false);
    }
  }, [isAuthenticated, user, BASE_URL, logout]);

  const addItem = async (endpoint, itemData) => {
    const result = await adminApiRequest(endpoint, "POST", itemData);
    if (result.success) {
      await loadAllData();
      return { success: true, message: "Element uğurla əlavə edildi." };
    } else {
      return { success: false, error: result.error };
    }
  };

  const updateItem = async (endpoint, id, updatedItem) => {
    const result = await adminApiRequest(`${endpoint}/${id}`, "PUT", updatedItem);
    if (result.success) {
      await loadAllData();
      return { success: true, message: "Element uğurla yeniləndi." };
    } else {
      return { success: false, error: result.error };
    }
  };

  const deleteItem = async (endpoint, id) => {
    const result = await adminApiRequest(`${endpoint}/${id}`, "DELETE");
    if (result.success) {
      await loadAllData();
      return { success: true, message: "Element uğurla silindi." };
    } else {
      return { success: false, error: result.error };
    }
  };

  return (
    <AdminDataContext.Provider value={{ data, loading, error, addItem, updateItem, deleteItem, reloadData: loadAllData }}>
      {children}
    </AdminDataContext.Provider>
  );
};
