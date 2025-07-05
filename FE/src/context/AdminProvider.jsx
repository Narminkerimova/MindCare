import { createContext, useState, useEffect } from "react";

export const AdminDataContext = createContext();

export const AdminDataProvider = ({ children }) => {
  const BASE_URL = "http://localhost:3000";

  const [data, setData] = useState({
    doctor: [],
    patient: [],
    center: [],
    quiz: [],
    article: [],
  });

  const [loading, setLoading] = useState(true);

  const fetchData = async (endpoint) => {
    try {
      const res = await fetch(`${BASE_URL}/${endpoint}`);
      if (!res.ok) throw new Error("Server error");
      return await res.json();
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      return [];
    }
  };

  const loadAllData = async () => {
    setLoading(true);
    const endpoints = ["doctor", "patient", "center", "quiz", "article"];

    const results = await Promise.all(endpoints.map(fetchData));

    setData({
      doctor: results[0],
      patient: results[1],
      center: results[2],
      quiz: results[3],
      article: results[4],
    });
    setLoading(false);
  };

  const createItem = async (endpoint, newItem) => {
    try {
      const res = await fetch(`${BASE_URL}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });
      if (!res.ok) throw new Error("Create failed");
      await loadAllData();
    } catch (error) {
      console.error(`Error creating ${endpoint}:`, error);
    }
  };

  const updateItem = async (endpoint, id, updatedItem) => {
    try {
      const res = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedItem),
      });
      if (!res.ok) throw new Error("Update failed");
      await loadAllData();
    } catch (error) {
      console.error(`Error updating ${endpoint}:`, error);
    }
  };

  const deleteItem = async (endpoint, id) => {
    try {
      const res = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      await loadAllData();
    } catch (error) {
      console.error(`Error deleting ${endpoint}:`, error);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  return (
    <AdminDataContext.Provider
      value={{
        data,
        loading,
        createItem,
        updateItem,
        deleteItem,
        reloadData: loadAllData,
      }}
    >
      {children}
    </AdminDataContext.Provider>
  );
};
