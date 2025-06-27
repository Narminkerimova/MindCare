import './style.css'

function UsersRecommendations() {
  return (
     <div className="dashboard-card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-lightbulb"></i>
                  Tövsiyələr
                </h3>
              </div>
              <div className="card-content">
                <div className="recommendation">
                  <div className="rec-icon">
                    <i class="fa-solid fa-spa"></i>
                  </div>
                  <div className="rec-content">
                    <h4>Meditasiya Təcrübəsi</h4>
                    <p>Hər gün 10 dəqiqə meditasiya etməyə çalışın</p>
                  </div>
                </div>
                <div className="recommendation">
                  <div className="rec-icon">
                    <i className="fas fa-walking"></i>
                  </div>
                  <div className="rec-content">
                    <h4>Fiziki Aktivlik</h4>
                    <p>Həftədə 3 dəfə 30 dəqiqə gəzinti edin</p>
                  </div>
                </div>
                <div className="recommendation">
                  <div className="rec-icon">
                    <i className="fas fa-bed"></i>
                  </div>
                  <div className="rec-content">
                    <h4>Yuxu Rejimi</h4>
                    <p>Hər gecə 7-8 saat keyfiyyətli yuxu alın</p>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default UsersRecommendations