import './style.css'

function UsersAppointments() {
  return (
       <div className="dashboard-card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-calendar-alt"></i>
                  Yaxın Randevular
                </h3>
                <a href="#" className="card-action">
                  Təqvim
                </a>
              </div>
              <div className="card-content">
                <div className="appointment">
                  <div className="appointment-date">
                    <span className="date-day">15</span>
                    <span className="date-month">İYUN</span>
                  </div>
                  <div className="appointment-info">
                    <h4>Terapiya Seansı</h4>
                    <p>Dr. Rəna Əliyeva</p>
                    <span className="appointment-time">
                      <i className="fas fa-clock"></i>
                      14:30 - 15:30
                    </span>
                  </div>
                  <div className="appointment-status online">
                    <i className="fas fa-video"></i>
                    Online
                  </div>
                </div>
                <div className="appointment">
                  <div className="appointment-date">
                    <span className="date-day">18</span>
                    <span className="date-month">İYUN</span>
                  </div>
                  <div className="appointment-info">
                    <h4>Nəzarət Müayinəsi</h4>
                    <p>Dr. Rəna Əliyeva</p>
                    <span className="appointment-time">
                      <i className="fas fa-clock"></i>
                      10:00 - 11:00
                    </span>
                  </div>
                  <div className="appointment-status offline">
                    <i className="fas fa-map-marker-alt"></i>
                    Klinika
                  </div>
                </div>
              </div>
            </div>
  )
}

export default UsersAppointments