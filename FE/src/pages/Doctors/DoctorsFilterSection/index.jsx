import { useContext } from "react";
import { DoctorFilterContext } from "../../../context/DoctorFilterProvider";
import './style.css';

function DoctorsFilterSection() {
  const { filter, setFilter } = useContext(DoctorFilterContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFilter({ specialty: "", experience: "", rating: "" });
  };

  return (
    <section className="doctors-filters">
      <div className="doctors-filters-container">
        <div className="doctors-filters-header">
          <h3 className="doctors-filters-title">Həkimləri filtrləyin</h3>
        </div>
        <div className="doctors-filters-grid">
          <div className="doctors-filter-group">
            <label className="doctors-filter-label">İxtisas sahəsi</label>
            <select
              name="specialty"
              value={filter.specialty}
              onChange={handleChange}
              className="doctors-filter-select"
            >
              <option value="">Bütün ixtisaslar</option>
              <option value="clinical">Klinik Psixoloq</option>
              <option value="child">Uşaq Psixoloqu</option>
              <option value="therapy">Psixoterapevt</option>
              <option value="family">Ailə Məsləhətçisi</option>
              <option value="neuropsychology">Neyropsixoloq</option>
            </select>
          </div>

          <div className="doctors-filter-group">
            <label className="doctors-filter-label">Təcrübə ili</label>
            <select
              name="experience"
              value={filter.experience}
              onChange={handleChange}
              className="doctors-filter-select"
            >
              <option value="">Hamısı</option>
              <option value="1-5">1-5 il</option>
              <option value="5-10">5-10 il</option>
              <option value="10+">10+ il</option>
            </select>
          </div>

          <div className="doctors-filter-group">
            <label className="doctors-filter-label">Reytinq</label>
            <select
              name="rating"
              value={filter.rating}
              onChange={handleChange}
              className="doctors-filter-select"
            >
              <option value="">Hamısı</option>
              <option value="5">5 ulduz</option>
              <option value="4">4+ ulduz</option>
              <option value="3">3+ ulduz</option>
            </select>
          </div>

          <div className="doctors-filter-group">
            <button onClick={handleReset} className="doctors-filter-reset">
              <i className="fas fa-refresh"></i>
              Sıfırla
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorsFilterSection;
