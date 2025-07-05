import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const BASE_URL = "http://localhost:3000";
  const endpoints = ["doctor", "patient", "article", "center", "quiz"];

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`);
      if (!response.ok) throw new Error("Server error");
      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error.message);
      return null;
    }
  };
  

  useEffect(() => {
    const loadAllData = async () => {
      const results = await Promise.all(
        endpoints.map((endpoint) => fetchData(endpoint))
      );

      const allData = {};
      endpoints.forEach((name, i) => {
        allData[name] = results[i];
      });

      setData(allData);
      setLoading(false);
    };

    loadAllData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, BASE_URL }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
