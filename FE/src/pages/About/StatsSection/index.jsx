import './style.css'

function StatsSection() {
  return (
    <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Aktiv İstifadəçi</div>
              <div className="stat-desc">
                Platformamızdan faydalanan insanlar
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Sertifikatlı Həkim</div>
              <div className="stat-desc">Peşəkar psixoloq və psixiatrlər</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Tərəfdaş Mərkəz</div>
              <div className="stat-desc">
                Bizimlə əməkdaşlıq edən klinikalar
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Elmi Test</div>
              <div className="stat-desc">
                Sertifikatlı psixoloji qiymətləndirmə
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default StatsSection