import { createContext, useState } from "react";

export const DoctorFilterContext = createContext();

function DoctorFilterProvider ({ children }){
  const [filter, setFilter] = useState({
    specialty: "",
    experience: "",
    rating: "",
  });

  return (
    <DoctorFilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </DoctorFilterContext.Provider>
  );
};

export default DoctorFilterProvider;


