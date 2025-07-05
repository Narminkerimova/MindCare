import { createContext, useState } from "react";

export const CenterFilterContext = createContext();

function CenterFilterProvider ({ children }){
  const [filters, setFilters] = useState({
    search: "",
    city: "all", 
    rating: "",
    specialties: "",
  });

  return (
    <CenterFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </CenterFilterContext.Provider>
  );
};

export default CenterFilterProvider;
