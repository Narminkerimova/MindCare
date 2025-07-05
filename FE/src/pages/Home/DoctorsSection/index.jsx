import { Link } from "react-router";
import { useContext } from "react";
import { DataContext } from "./../../../context/DataProvider.jsx";
import "./style.css";

function DoctorsSection() {
  const { data, loading } = useContext(DataContext);
  if (loading) return <p>Yüklənir...</p>;

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
    <section id="doctors" className="doctors">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">👨‍⚕️ Komandamız</div>
          <h2>Təcrübəli Həkimlərimiz</h2>
          <p>Peşəkar psixoloq və psixiatrlarımız</p>
        </div>
        <div className="doctors-grid">
          {data.doctor.map((doctor) => (
            <div className="doctor-card" key={doctor._id}>
              <div className="doctor-avatar">
                <i className="fa-solid fa-user-doctor"></i>
                <div className="doctor-status online" />
              </div>
              <div className="doctor-info">
                <h3>{doctor.fullName}</h3>
                <p className="doctor-specialty">{doctor.position}</p>
                <div className="doctor-rating">
                  {renderStars(doctor.rating)}
                  <span>{doctor.rating.toFixed(1)}</span>
                </div>
                <p className="doctor-experience">{doctor.experienceYears} il təcrübə</p>
                <div className="doctor-actions">
                  <Link to={`/doctordetail/${doctor._id}`}>
                    <button className="btn-primary btn-small">Profil</button>
                    <button className="btn-outline btn-small">Chat</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DoctorsSection;
