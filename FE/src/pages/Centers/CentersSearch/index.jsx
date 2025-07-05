import './style.css';
import { useContext } from "react";
import { CenterFilterContext } from "../../../context/CenterFilterProvider.jsx";

function CentersSearch() {
  const { filters, setFilters } = useContext(CenterFilterContext);

  const handleSearchChange = (e) => {
    setFilters((prev) => ({ ...prev, search: e.target.value }));
  };

  const handleCityFilter = (cityValue) => {
    setFilters((prev) => ({ ...prev, city: cityValue }));
  };

  return (
    <section className="search-section">
      <div className="search-container">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Şəhər və ya mərkəz adı ilə axtar..."
            value={filters.search}
            onChange={handleSearchChange}
          />
        </div>

        <div className="filter-buttons">
          {[
            { label: "Hamısı", city: "all", icon: "fa-globe" },
            { label: "Bakı", city: "baku", icon: "fa-building" },
            { label: "Gəncə", city: "ganja", icon: "fa-city" },
            { label: "Sumqayıt", city: "sumqayit", icon: "fa-industry" },
          ].map((btn) => (
            <button
              key={btn.city}
              className={`filter-btn ${filters.city === btn.city ? "active" : ""}`}
              onClick={() => handleCityFilter(btn.city)}
            >
              <i className={`fas ${btn.icon}`}></i>
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CentersSearch;
