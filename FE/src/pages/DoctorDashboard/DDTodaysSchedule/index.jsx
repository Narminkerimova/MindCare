import './style.css'

function DDTodaysSchedule() {
  return (
                <div className="dashboard-card schedule-card">
              <div className="card-header">
                <h3>Bugünkü Proqram</h3>
                <button className="btn-secondary">
                  <i className="fas fa-plus"></i>
                  Yeni
                </button>
              </div>

              <div className="schedule-list">
                <div className="schedule-item">
                  <div className="schedule-time">09:00</div>
                  <div className="schedule-info">
                    <h4>Ayşə Məmmədova</h4>
                    <p>Anksiyete terapiyası</p>
                    <span className="schedule-type video">Video Çağrı</span>
                  </div>
                  <div className="schedule-actions">
                    <button className="btn-icon">
                      <i className="fas fa-video"></i>
                    </button>
                  </div>
                </div>

                <div className="schedule-item">
                  <div className="schedule-time">11:30</div>
                  <div className="schedule-info">
                    <h4>Ramil Hüseynov</h4>
                    <p>Stress idarəetməsi</p>
                    <span className="schedule-type in-person">Şəxsi görüş</span>
                  </div>
                  <div className="schedule-actions">
                    <button className="btn-icon">
                      <i className="fas fa-user"></i>
                    </button>
                  </div>
                </div>

                <div className="schedule-item">
                  <div className="schedule-time">14:00</div>
                  <div className="schedule-info">
                    <h4>Leyla Əhmədova</h4>
                    <p>Depresiya müalicəsi</p>
                    <span className="schedule-type video">Video Çağrı</span>
                  </div>
                  <div className="schedule-actions">
                    <button className="btn-icon">
                      <i className="fas fa-video"></i>
                    </button>
                  </div>
                </div>

                <div className="schedule-item">
                  <div className="schedule-time">16:30</div>
                  <div className="schedule-info">
                    <h4>Fərid Quliyev</h4>
                    <p>Davranış terapiyası</p>
                    <span className="schedule-type in-person">Şəxsi görüş</span>
                  </div>
                  <div className="schedule-actions">
                    <button className="btn-icon">
                      <i className="fas fa-user"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default DDTodaysSchedule