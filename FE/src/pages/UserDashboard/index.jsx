import React from 'react'

function UserDashboard() {
  return (
    <div class="dashboard-container">
        <aside class="sidebar">
            <nav class="sidebar-nav">
                <a href="#" class="nav-item active">
                    <i class="fas fa-home"></i>
                    <span>Ana Səhifə</span>
                </a>
                <a href="#" class="nav-item">
                    <i class="fas fa-clipboard-check"></i>
                    <span>Test Nəticələri</span>
                </a>
                <a href="#" class="nav-item">
                    <i class="fas fa-user-md"></i>
                    <span>Həkimim</span>
                </a>
                <a href="#" class="nav-item">
                    <i class="fas fa-calendar-alt"></i>
                    <span>Randevular</span>
                </a>
                <a href="#" class="nav-item">
                    <i class="fas fa-comments"></i>
                    <span>Mesajlar</span>
                </a>
                <a href="#" class="nav-item">
                    <i class="fas fa-chart-line"></i>
                    <span>İrəliləyiş</span>
                </a>
                <a href="#" class="nav-item">
                    <i class="fas fa-cog"></i>
                    <span>Parametrlər</span>
                </a>
            </nav>
        </aside>

        <main class="main-content">
            <div class="welcome-section">
                <div class="welcome-content">
                    <h1 class="welcome-title">Xoş gəlmisiniz, Aynur!</h1>
                    <p class="welcome-subtitle">Bu gün necə hiss edirsiniz? Sizin üçün hazırladığımız xülasəni nəzərdən keçirin.</p>
                </div>
                <div class="welcome-stats">
                    <div class="stat-card">
                        <div class="stat-icon success">
                            <i class="fas fa-smile"></i>
                        </div>
                        <div class="stat-info">
                            <span class="stat-number">85%</span>
                            <span class="stat-label">Ümumi vəziyyət</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon warning">
                            <i class="fas fa-heart"></i>
                        </div>
                        <div class="stat-info">
                            <span class="stat-number">7</span>
                            <span class="stat-label">Aktiv gün</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon primary">
                            <i class="fas fa-trophy"></i>
                        </div>
                        <div class="stat-info">
                            <span class="stat-number">12</span>
                            <span class="stat-label">Tamamlanan test</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="dashboard-grid">
                <div class="dashboard-card">
                    <div class="card-header">
                        <h3 class="card-title">
                            <i class="fas fa-clipboard-check"></i>
                            Son Test Nəticələri
                        </h3>
                        <a href="#" class="card-action">Hamısını gör</a>
                    </div>
                    <div class="card-content">
                        <div class="quiz-result">
                            <div class="quiz-info">
                                <h4>Stress Səviyyəsi Testi</h4>
                                <span class="quiz-date">3 gün əvvəl</span>
                            </div>
                            <div class="quiz-score moderate">
                                <span class="score-value">65%</span>
                                <span class="score-label">Orta stress</span>
                            </div>
                        </div>
                        <div class="quiz-result">
                            <div class="quiz-info">
                                <h4>Depresiya Testi (PHQ-9)</h4>
                                <span class="quiz-date">1 həftə əvvəl</span>
                            </div>
                            <div class="quiz-score low">
                                <span class="score-value">23%</span>
                                <span class="score-label">Yüngül</span>
                            </div>
                        </div>
                        <div class="quiz-result">
                            <div class="quiz-info">
                                <h4>Anksiyete Testi (GAD-7)</h4>
                                <span class="quiz-date">2 həftə əvvəl</span>
                            </div>
                            <div class="quiz-score high">
                                <span class="score-value">78%</span>
                                <span class="score-label">Yüksək</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dashboard-card">
                    <div class="card-header">
                        <h3 class="card-title">
                            <i class="fas fa-user-md"></i>
                            Həkimim
                        </h3>
                        <a href="#" class="card-action">Profil</a>
                    </div>
                    <div class="card-content">
                        <div class="doctor-profile">
                            <div class="doctor-avatar">RƏ</div>
                            <div class="doctor-info">
                                <h4>Dr. Rəna Əliyeva</h4>
                                <p class="doctor-specialty">Klinik Psixoloq</p>
                                <p class="doctor-experience">8 il təcrübə</p>
                            </div>
                        </div>
                        <div class="doctor-stats">
                            <div class="doctor-stat">
                                <i class="fas fa-star"></i>
                                <span>4.9 reytinq</span>
                            </div>
                            <div class="doctor-stat">
                                <i class="fas fa-users"></i>
                                <span>150+ pasiyent</span>
                            </div>
                        </div>
                        <div class="doctor-actions">
                            <button class="btn btn-primary">
                                <i class="fas fa-video"></i>
                                Videoçağrı
                            </button>
                            <button class="btn btn-outline">
                                <i class="fas fa-comment"></i>
                                Mesaj
                            </button>
                        </div>
                    </div>
                </div>

                <div class="dashboard-card">
                    <div class="card-header">
                        <h3 class="card-title">
                            <i class="fas fa-calendar-alt"></i>
                            Yaxın Randevular
                        </h3>
                        <a href="#" class="card-action">Təqvim</a>
                    </div>
                    <div class="card-content">
                        <div class="appointment">
                            <div class="appointment-date">
                                <span class="date-day">15</span>
                                <span class="date-month">İYUN</span>
                            </div>
                            <div class="appointment-info">
                                <h4>Terapiya Seansı</h4>
                                <p>Dr. Rəna Əliyeva</p>
                                <span class="appointment-time">
                                    <i class="fas fa-clock"></i>
                                    14:30 - 15:30
                                </span>
                            </div>
                            <div class="appointment-status online">
                                <i class="fas fa-video"></i>
                                Online
                            </div>
                        </div>
                        <div class="appointment">
                            <div class="appointment-date">
                                <span class="date-day">18</span>
                                <span class="date-month">İYUN</span>
                            </div>
                            <div class="appointment-info">
                                <h4>Nəzarət Müayinəsi</h4>
                                <p>Dr. Rəna Əliyeva</p>
                                <span class="appointment-time">
                                    <i class="fas fa-clock"></i>
                                    10:00 - 11:00
                                </span>
                            </div>
                            <div class="appointment-status offline">
                                <i class="fas fa-map-marker-alt"></i>
                                Klinika
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dashboard-card full-width">
                    <div class="card-header">
                        <h3 class="card-title">
                            <i class="fas fa-chart-line"></i>
                            İrəliləyiş Statistikası
                        </h3>
                        <div class="chart-filters">
                            <button class="filter-btn active">1 ay</button>
                            <button class="filter-btn">3 ay</button>
                            <button class="filter-btn">6 ay</button>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="progress-overview">
                            <div class="progress-item">
                                <div class="progress-label">Stress Səviyyəsi</div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 35%"></div>
                                </div>
                                <span class="progress-value">35% ↓</span>
                            </div>
                            <div class="progress-item">
                                <div class="progress-label">Depresiya</div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 20%"></div>
                                </div>
                                <span class="progress-value">20% ↓</span>
                            </div>
                            <div class="progress-item">
                                <div class="progress-label">Anksiyete</div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 45%"></div>
                                </div>
                                <span class="progress-value">45% ↓</span>
                            </div>
                            <div class="progress-item">
                                <div class="progress-label">Ümumi Rifahlıq</div>
                                <div class="progress-bar positive">
                                    <div class="progress-fill" style="width: 75%"></div>
                                </div>
                                <span class="progress-value positive">75% ↑</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dashboard-card">
                    <div class="card-header">
                        <h3 class="card-title">
                            <i class="fas fa-lightbulb"></i>
                            Tövsiyələr
                        </h3>
                    </div>
                    <div class="card-content">
                        <div class="recommendation">
                            <div class="rec-icon">
                                <i class="fas fa-meditation"></i>
                            </div>
                            <div class="rec-content">
                                <h4>Meditasiya Təcrübəsi</h4>
                                <p>Hər gün 10 dəqiqə meditasiya etməyə çalışın</p>
                            </div>
                        </div>
                        <div class="recommendation">
                            <div class="rec-icon">
                                <i class="fas fa-walking"></i>
                            </div>
                            <div class="rec-content">
                                <h4>Fiziki Aktivlik</h4>
                                <p>Həftədə 3 dəfə 30 dəqiqə gəzinti edin</p>
                            </div>
                        </div>
                        <div class="recommendation">
                            <div class="rec-icon">
                                <i class="fas fa-bed"></i>
                            </div>
                            <div class="rec-content">
                                <h4>Yuxu Rejimi</h4>
                                <p>Hər gecə 7-8 saat keyfiyyətli yuxu alın</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dashboard-card">
                    <div class="card-header">
                        <h3 class="card-title">
                            <i class="fas fa-bolt"></i>
                            Tez Əməliyyatlar
                        </h3>
                    </div>
                    <div class="card-content">
                        <div class="quick-actions">
                            <button class="quick-action">
                                <i class="fas fa-plus"></i>
                                <span>Yeni Test</span>
                            </button>
                            <button class="quick-action">
                                <i class="fas fa-calendar-plus"></i>
                                <span>Randevu Al</span>
                            </button>
                            <button class="quick-action">
                                <i class="fas fa-robot"></i>
                                <span>AI Köməkçi</span>
                            </button>
                            <button class="quick-action">
                                <i class="fas fa-book"></i>
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