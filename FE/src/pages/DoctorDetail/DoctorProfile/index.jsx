import './style.css';

function DoctorProfile({ doctor }) {
  return (
    <div className="doctor-profile-main">
      <div className="doctor-profile-header">
        <div className="doctor-avatar-large">
          <img src={doctor.photoUrl} alt={doctor.fullName} />
        </div>
        <div className="doctor-profile-info">
          <h1 className="doctor-name">{doctor.fullName}</h1>
          <div className="doctor-specialty">{doctor.position}</div>
          <div className="doctor-credentials">
            <span className="credential">{doctor.workplace}</span>
          </div>
          <div className="doctor-rating">
            <div className="stars">
              {Array.from({ length: Math.round(doctor.rating || 0) }, (_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
            <span className="rating-text">{doctor.rating} ({doctor.clientCount} rəy)</span>
          </div>
        </div>
      </div>

      <div className="doctor-about">
        <h3 className="section-title">Haqqında</h3>
        <p className="about-text">{doctor.about}</p>
      </div>

      <div className="doctor-specializations">
        <h3 className="section-title">İxtisas sahələri</h3>
        <div className="specializations-grid">
          {doctor.specialties.map((item, i) => (
            <div className="specialization-item" key={i}>
              <i className="fas fa-check-circle"></i>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
