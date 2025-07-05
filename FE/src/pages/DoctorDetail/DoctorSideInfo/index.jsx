import "./style.css";

function DoctorSideInfo({ doctor }) {
  return (
    <div className="doctor-profile-sidebar">
      <div className="booking-card">
        <div className="booking-header">
          <h3>Randevu al</h3>
          <div className="price">
            <span className="price-amount">{doctor.appointmentPrice} ₼</span>
            <span className="price-period">/ seans</span>
          </div>
        </div>
        <div className="booking-body">
          <div className="booking-info">
            <div className="info-item">
              <i className="fas fa-clock"></i>
              <span>45 dəqiqə</span>
            </div>
            <div className="info-item">
              <i className="fas fa-video"></i>
              <span>Online konsultasiya</span>
            </div>
          </div>
          <button className="btn btn-primary btn-full">
            <i className="fas fa-calendar-plus"></i>
            Randevu al
          </button>
        </div>
      </div>

      <div className="contact-card">
        <h3>Əlaqə</h3>
        <div className="contact-methods">
          <div className="contact-method">
            <i className="fas fa-phone"></i>
            <span>{doctor.phone}</span>
          </div>
        </div>
      </div>

      <div className="stats-card">
        <h3>Statistika</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">{doctor.experienceYears}</div>
            <div className="stat-label">İl təcrübə</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{doctor.clientCount}+</div>
            <div className="stat-label">Müştəri</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{doctor.rating * 20}%</div>
            <div className="stat-label">Məmnunluq</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Dəstək</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorSideInfo;
