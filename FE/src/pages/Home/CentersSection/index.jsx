import { useContext } from "react";
import { DataContext } from "./../../../context/DataProvider.jsx";
import { Link } from 'react-router'; 
import LoadingSpinner from "../../../components/LoadingSpinner.jsx";
import "./style.css";

function CentersSection() {
  const { data, loading } = useContext(DataContext);

  if (loading) {
    return <LoadingSpinner/>;
  }

  if (!data || !data.center || !Array.isArray(data.center)) {
    console.error("Mərkəz məlumatları əldə oluna bilmədi və ya düzgün formatda deyil:", data.center);
    return <p>Mərkəzlər tapılmadı və ya məlumat yüklənərkən problem yaşandı. Zəhmət olmasa səhifəni yeniləyin.</p>;
  }

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={"full" + i} className="fas fa-star"></i>);
    }
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={"empty" + i} className="far fa-star"></i>);
    }

    return stars;
  };

  return (
    <section className="medical-centers" id="medical-centers">
      <div className="section-header">
        <div className="section-badge">🏥 Mərkəzlər</div>
        <h2 className="section-title">Psixoloji Dəstək Mərkəzləri</h2>
        <p className="section-subtitle">
          Bakı və digər şəhərlərdə yerləşən etibarlı psixoloji dəstək mərkəzlərimiz
        </p>
      </div>

      <div className="centers-grid">
        {data.center.map((center) => (
          <div className="center-card" key={center._id}>
            <div className="center-image">
              <img src={center.photoUrl} alt={center.name + " şəkli"} /> 
            </div>
            <div className="center-info">
              <h3 className="center-name">{center.name.slice(0, 35)}{center.name.length > 35 ? '...' : ''}</h3> 
              <div className="center-location">
                <i className="fas fa-map-marker-alt"></i>
                {center.fullAddress.slice(0, 55)}{center.fullAddress.length > 55 ? '...' : ''} 
              </div>
              <div className="center-rating">
                <div className="stars">
                  {renderStars(center.rating)} 
                </div>
                <span className="rating-text">{center.rating.toFixed(1)}</span> 
              </div>
              <div className="center-specialties">
                <span>Uşaq psixologiyası</span>
                <span>Ailə terapiyası</span>
                <span>Klinik psixologiya</span>
              </div>
              <div className="center-contact">
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>{center.phoneNumber || '+994 XX XXX XX XX'}</span> 
                </div>
                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <span>{center.openingHours || '09:00 - 18:00'}</span>
                </div>
              </div>
              <Link to={`/centerdetail/${center._id}`} className="btn btn-outline center-btn"> 
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