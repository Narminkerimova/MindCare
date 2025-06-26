import './style.css'

function UserDashboard() {
  return (
    <div className="dashboard-container">
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <a href="#" className="nav-item active">
                    <i className="fas fa-home"></i>
                    <span>Ana Səhifə</span>
                </a>
                <a href="#" className="nav-item">
                    <i className="fas fa-clipboard-check"></i>
                    <span>Test Nəticələri</span>
                </a>
                <a href="#" className="nav-item">
                    <i className="fas fa-user-md"></i>
                    <span>Həkimim</span>
                </a>
                <a href="#" className="nav-item">
                    <i className="fas fa-calendar-alt"></i>
                    <span>Randevular</span>
                </a>
                <a href="#" className="nav-item">
                    <i className="fas fa-comments"></i>
                    <span>Mesajlar</span>
                </a>
                <a href="#" className="nav-item">
                    <i className="fas fa-chart-line"></i>
                    <span>İrəliləyiş</span>
                </a>
                <a href="#" className="nav-item">
                    <i className="fas fa-cog"></i>
                    <span>Parametrlər</span>
                </a>
            </nav>
        </aside>

        <main className="main-content">
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

            <div className="dashboard-grid">
                <div className="dashboard-card">
                    <div className="card-header">
                        <h3 className="card-title">
                            <i className="fas fa-clipboard-check"></i>
                            Son Test Nəticələri
                        </h3>
                        <a href="#" className="card-action">Hamısını gör</a>
                    </div>
                    <div className="card-content">
                        <div className="quiz-result">
                            <div className="quiz-info">
                                <h4>Stress Səviyyəsi Testi</h4>
                                <span className="quiz-date">3 gün əvvəl</span>
                            </div>
                            <div className="quiz-score moderate">
                                <span className="score-value">65%</span>
                                <span className="score-label">Orta stress</span>
                            </div>
                        </div>
                        <div className="quiz-result">
                            <div className="quiz-info">
                                <h4>Depresiya Testi (PHQ-9)</h4>
                                <span className="quiz-date">1 həftə əvvəl</span>
                            </div>
                            <div className="quiz-score low">
                                <span className="score-value">23%</span>
                                <span className="score-label">Yüngül</span>
                            </div>
                        </div>
                        <div className="quiz-result">
                            <div className="quiz-info">
                                <h4>Anksiyete Testi (GAD-7)</h4>
                                <span className="quiz-date">2 həftə əvvəl</span>
                            </div>
                            <div className="quiz-score high">
                                <span className="score-value">78%</span>
                                <span className="score-label">Yüksək</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card">
                    <div className="card-header">
                        <h3 className="card-title">
                            <i className="fas fa-user-md"></i>
                            Həkimim
                        </h3>
                        <a href="#" className="card-action">Profil</a>
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

                <div className="dashboard-card">
                    <div className="card-header">
                        <h3 className="card-title">
                            <i className="fas fa-calendar-alt"></i>
                            Yaxın Randevular
                        </h3>
                        <a href="#" className="card-action">Təqvim</a>
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

                <div className="dashboard-card full-width">
                    <div className="card-header">
                        <h3 className="card-title">
                            <i className="fas fa-chart-line"></i>
                            İrəliləyiş Statistikası
                        </h3>
                        <div className="chart-filters">
                            <button className="filter-btn active">1 ay</button>
                            <button className="filter-btn">3 ay</button>
                            <button className="filter-btn">6 ay</button>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="progress-overview">
                            <div className="progress-item">
                                <div className="progress-label">Stress Səviyyəsi</div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{width: "35%"}}></div>
                                </div>
                                <span className="progress-value">35% ↓</span>
                            </div>
                            <div className="progress-item">
                                <div className="progress-label">Depresiya</div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{width: "20%"}}></div>
                                </div>
                                <span className="progress-value">20% ↓</span>
                            </div>
                            <div className="progress-item">
                                <div className="progress-label">Anksiyete</div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{width: "45%"}}></div>
                                </div>
                                <span className="progress-value">45% ↓</span>
                            </div>
                            <div className="progress-item">
                                <div className="progress-label">Ümumi Rifahlıq</div>
                                <div className="progress-bar positive">
                                    <div className="progress-fill" style={{width: "75%"}}></div>
                                </div>
                                <span className="progress-value positive">75% ↑</span>
                            </div>
                        </div>
                    </div>
                </div>

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
                                <i className="fas fa-meditation"></i>
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

                <div className="dashboard-card">
                    <div className="card-header">
                        <h3 className="card-title">
                            <i className="fas fa-bolt"></i>
                            Tez Əməliyyatlar
                        </h3>
                    </div>
                    <div className="card-content">
                        <div className="quick-actions">
                            <button className="quick-action">
                                <i className="fas fa-plus"></i>
                                <span>Yeni Test</span>
                            </button>
                            <button className="quick-action">
                                <i className="fas fa-calendar-plus"></i>
                                <span>Randevu Al</span>
                            </button>
                            <button className="quick-action">
                                <i className="fas fa-robot"></i>
                                <span>AI Köməkçi</span>
                            </button>
                            <button className="quick-action">
                                <i className="fas fa-book"></i>
                                <span>Məqalələr</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default UserDashboard