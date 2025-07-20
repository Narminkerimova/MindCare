import './style.css'

function AboutPlatform() {
  return (
    <section className="platform-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">💻 Platformamız</div>
            <h2 className="section-title">Necə İşləyir?</h2>
            <p className="section-subtitle">
              MindCare platforması həkimlər, mərkəzlər və istifadəçilər üçün
              tam inteqrasiya edilmiş rəqəmsal ekosistem təqdim edir.
            </p>
          </div>

          <div className="platform-grid">
            <div className="platform-card">
              <div className="platform-icon users">
                <i className="fas fa-user-friends"></i>
              </div>
              <h3 className="platform-title">İstifadəçilər üçün</h3>
              <ul className="platform-features">
                <li>Pulsuz psixoloji testlər</li>
                <li>AI köməkçi ilə 24/7 söhbət</li>
                <li>Həkimlərlə online konsultasiya</li>
                <li>Şəxsi irəliləyiş izləmə</li>
                <li>Təlim materialları və məqalələr</li>
              </ul>
            </div>

            <div className="platform-card">
              <div className="platform-icon doctor">
                <i className="fa-solid fa-user-doctor"></i>
              </div>
              <h3 className="platform-title">Həkimlər üçün</h3>
              <ul className="platform-features">
                <li>Xəstə idarəetmə sistemi</li>
                <li>Randevu planlaşdırma</li>
                <li>Video konsultasiya alətləri</li>
                <li>Test nəticələrinin analizi</li>
                <li>Peşəkar şəbəkələşmə</li>
              </ul>
            </div>

            <div className="platform-card">
              <div className="platform-icon centers">
                <i className="fas fa-hospital"></i>
              </div>
              <h3 className="platform-title">Mərkəzlər üçün</h3>
              <ul className="platform-features">
                <li>Klinika idarəetmə sistemi</li>
                <li>Həkim və xəstə bazası</li>
                <li>Maliyyə hesabatları</li>
                <li>Online görünürlük</li>
                <li>Rəqəmsal marketinq dəstəyi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutPlatform