import { useContext } from "react";
import { QuizFilterContext } from "../../../../../context/QuizFilterProvider.jsx";
import './style.css'

function CategoriesList() {
  const { categories, selectedCategory, setSelectedCategory } = useContext(QuizFilterContext);

  if (!categories) {
    return <p>Kategoriya məlumatı yüklənmir...</p>;
  }

  return (
    <section className="quiz-list">
      <div className="container">
        <div className="quiz-tabs">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`quiz-tab ${selectedCategory === cat.key ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.key)}
              data-tab={cat.key}
            >
              <i className={cat.icon}></i> {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesList;
