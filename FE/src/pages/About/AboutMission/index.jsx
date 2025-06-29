import './style.css'

function AboutMission() {
  return (
       <section className="mission-section">
        <div className="section-container">
          <div className="mission-grid">
            <div className="mission-content">
              <div className="section-badge">🎯 Missiyamız</div>
              <h2 className="section-title">Psixoloji Sağlamlığa Rəqəmsal Yanaşma</h2>
              <p className="mission-desc">
                Müasir texnologiyaları ənənəvi psixologiya ilə birləşdirərək, hər yaşdan və 
                sosial təbəqədən olan insanlara keyfiyyətli psixoloji sağlamlıq dəstəyi təqdim edirik.
              </p>
              <div className="mission-points">
                <div className="mission-point">
                  <i className="fas fa-check-circle"></i>
                  Elmi əsaslı və sertifikatlı testlər
                </div>
                <div className="mission-point">
                  <i className="fas fa-check-circle"></i>
                  24/7 AI dəstəkli psixoloji köməklik
                </div>
                <div className="mission-point">
                  <i className="fas fa-check-circle"></i>
                  Peşəkar həkimlərlə birbaşa əlaqə
                </div>
                <div className="mission-point">
                  <i className="fas fa-check-circle"></i>
                  Məxfi və təhlükəsiz platforma
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <div className="mission-card">
                <div className="mission-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h3>Global Standartlar</h3>
                <p>Beynəlxalq psixologiya standartlarına uyğun xidmət</p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Təhlükəsizlik</h3>
                <p>Şəxsi məlumatların tam məxfiliyi və qorunması</p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Əlçatanlıq</h3>
                <p>Hər kəs üçün münasib qiymətə keyfiyyətli xidmət</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutMission