import { createContext, useState } from "react";

export const QuizFilterContext = createContext();

function QuizFilterProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { key: "all", label: "Hamısı", icon: "fas fa-list" },
    { key: "Depressiya", label: "Depressiya", icon: "fas fa-brain" },
    { key: "Stress", label: "Stress", icon: "fas fa-bolt" },
    { key: "Anksiyete", label: "Anksiyete", icon: "fas fa-heartbeat" },
    { key: "Şəxsiyyət", label: "Şəxsiyyət", icon: "fas fa-user" },
  ];

  return (
    <QuizFilterContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        categories, 
      }}
    >
      {children}
    </QuizFilterContext.Provider>
  );
}

export default QuizFilterProvider;