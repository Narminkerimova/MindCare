import { useContext } from "react";
import { DataContext } from "./../../../context/DataProvider.jsx";
import {Link} from 'react-router'
import "./style.css";

function CentersSection() {
  const { data, loading } = useContext(DataContext);
  if (loading) return <p>Yüklənir...</p>;

  return (
    <section className="medical-centers" id="medical-centers">
      <div className="section-header">
        <div className="section-badge">🏥 Mərkəzlər</div>
        <h2 className="section-title">Psixoloji Dəstək Mərkəzləri</h2>
        <p className="section-subtitle">
          Bakı və digər şəhərlərdə yerləşən etibarlı psixoloji dəstək
          mərkəzlərimiz
        </p>
      </div>

      <div className="centers-grid">
        {data.center.map((center) => (
          <div className="center-card" key={center._id}>
            <div className="center-image">
              <img src={center.photoUrl} alt="center image" />
            </div>
            <div className="center-info">
              <h3 className="center-name">{center.name.slice(0,35)}</h3>
              <div className="center-location">
                <i className="fas fa-map-marker-alt"></i>
                {center.fullAddress.slice(0,55)}
              </div>
              <div className="center-rating">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="rating-text">{center.rating}</span>
              </div>
              <div className="center-specialties">
                <span>Uşaq psixologiyası</span>
                <span>Ailə terapiyası</span>
                <span>Klinik psixologiya</span>
              </div>
              <div className="center-contact">
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+994 12 555 55 55</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <span>09:00 - 18:00</span>
                </div>
              </div>
              <Link to={"/centers"} className="btn btn-outline center-btn">
                <i className="fas fa-info-circle"></i>
                Ətraflı məlumat
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CentersSection; 