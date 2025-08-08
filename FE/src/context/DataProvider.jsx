import { createContext, useState, useEffect } from "react";

export const DataContext = createContext(); 

const DataProvider = ({ children }) => { 
  const BASE_URL = import.meta.env.BASE_URL;

  const [data, setData] = useState({
    doctor: [],
    patient: [],
    center: [],
    quiz: [],
    article: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (endpoint) => {
    try {
      const res = await fetch(`${BASE_URL}/${endpoint}`);
      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({ message: res.statusText }));
        throw new Error(`Failed to fetch ${endpoint}: ${errorBody.message || res.statusText}`);
      }
      return await res.json();
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      setError(error.message);
      return null; 
    }
  };

  const loadAllData = async () => {
    setLoading(true);
    setError(null);
    const endpoints = ["doctor", "patient", "center", "quiz", "article"];

    const results = await Promise.all(endpoints.map(fetchData));

    const newData = {};
    endpoints.forEach((endpointName, index) => {
      newData[endpointName] = results[index] && results[index].data ? results[index].data : [];
    });
    setData(newData);
    setLoading(false);
  };

  useEffect(() => {
    loadAllData();
  }, []);

  console.log("DataProvider: Rendering DataContext.Provider with value:", { data, loading, BASE_URL });

  return (
    <DataContext.Provider value={{ data, loading, error, BASE_URL, reloadData: loadAllData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider; 