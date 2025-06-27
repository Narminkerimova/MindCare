import './style.css'

function WelcomeUser() {
  return (
    <div className="welcome-section">
                <div className="welcome-content">
                    <h1 className="welcome-title">Xoş gəlmisiniz, Aynur!</h1>
                    <p className="welcome-subtitle">Bu gün necə hiss edirsiniz? Sizin üçün hazırladığımız xülasəni nəzərdən keçirin.</p>
                </div>
                <div className="welcome-stats">
                    <div className="stat-card">
                        <div className="stat-icon success">
                            <i className="fas fa-smile"></i>
                        </div>
                        <div className="stat-info">
                            <span className="stat-number">85%</span>
                            <span className="stat-label">Ümumi vəziyyət</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon warning">
                            <i className="fas fa-heart"></i>
                        </div>
                        <div className="stat-info">
                            <span className="stat-number">7</span>
                            <span className="stat-label">Aktiv gün</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon primary">
                            <i className="fas fa-trophy"></i>
                        </div>
                        <div className="stat-info">
                            <span className="stat-number">12</span>
                            <span className="stat-label">Tamamlanan test</span>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default WelcomeUser