import "./style.css";

function UsersDoctor() {
  return (
    <div className="dashboard-card">
        <div className="card-header">
          <h3 className="card-title">
            <i className="fas fa-user-md"></i>
            Həkimim
          </h3>
          <a href="#" className="card-action">
            Profil
          </a>
        </div>
        <div className="card-content">
          <div className="doctor-profile">
            <div className="doctor-avatar">RƏ</div>
            <div className="doctor-info">
              <h4>Dr. Rəna Əliyeva</h4>
              <p className="doctor-specialty">Klinik Psixoloq</p>
              <p className="doctor-experience">8 il təcrübə</p>
            </div>
          </div>
          <div className="doctor-stats">
            <div className="doctor-stat">
              <i className="fas fa-star"></i>
              <span>4.9 reytinq</span>
            </div>
            <div className="doctor-stat">
              <i className="fas fa-users"></i>
              <span>150+ pasiyent</span>
            </div>
          </div>
          <div className="doctor-actions">
            <button className="btn btn-primary">
              <i className="fas fa-video"></i>
              Videoçağrı
            </button>
            <button className="btn btn-outline">
              <i className="fas fa-comment"></i>
              Mesaj
            </button>
          </div>
        </div>
    </div>
  );
}

export default UsersDoctor;
