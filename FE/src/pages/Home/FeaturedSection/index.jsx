import {Link} from "react-router"
import "./style.css"
function FeaturesSection() {
  return (
    <section className="features">
      <div className="section-header">
        <div className="section-badge">✨ Xidmətlərimiz</div>
        <h2 className="section-title">Hərtərəfli Psixoloji Dəstək</h2>
        <p className="section-subtitle">
          Zehni sağlamlığınız üçün elmi yanaşma və müasir texnologiyaların
          birləşdiyi peşəkar xidmətlər təqdim edirik!
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-clipboard-check"></i>
          </div>
          <h3 className="feature-title">Elmi Psixoloji Testlər</h3>
          <p className="feature-desc">
            Beynəlxalq standartlara uyğun hazırlanmış stress, depressiya və
            anksiyete testləri ilə durumunuzu dəqiq qiymətləndirin.
          </p>
          <Link to={'/quiz'} className="feature-link">
            Test et <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-video"></i>
          </div>
          <h3 className="feature-title">Online Terapiya Seansları</h3>
          <p className="feature-desc">
            Sertifikatlı psixoloqlarla video çağrı və ya mesajlaşma yolu ilə
            fərdi terapiya seansları keçirin.
          </p>
          <Link to={'/'}  className="feature-link">
            Başla <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <h3 className="feature-title">Ağıllı Randevu Sistemi</h3>
          <p className="feature-desc">
            Google Calendar inteqrasiyası ilə həkimlərin uyğun vaxtlarını görün
            və randevu təyin edin.
          </p>
          <Link to={'/doctor'} className="feature-link">
            Randevu al <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-robot"></i>
          </div>
          <h3 className="feature-title">AI Psixoloji Məsləhətçi</h3>
          <p className="feature-desc">
            24/7 mövcud olan süni intellekt köməkçimizdən anında cavablar alın
            və ilkin dəstək götürün.
          </p>
          <Link to={'/ai'} className="feature-link">
            Soruş <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-book-open"></i>
          </div>
          <h3 className="feature-title">Ekspert Blog Məqalələri</h3>
          <p className="feature-desc">
            Həkimlərimizin yazdığı faydalı məqalələr və psixoloji sağlamlıq üzrə
            məsləhətləri oxuyun.
          </p>
          <Link  to={'/blogs'} className="feature-link">
            Oxu <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <h3 className="feature-title">Şəxsi İrəliləyiş Takibi</h3>
          <p className="feature-desc">
            Test nəticələrinizi və terapiya prossesinizi izləyin,
            irəliləyişinizi görün və məqsədlər qoyun.
          </p>
          <Link to={'/about'} className="feature-link">
            İzlə <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection