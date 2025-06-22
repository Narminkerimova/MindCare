import {Link} from "react-router"
import "./style.css"
function ServicesSection() {
  return (
    <section className="services">
      <div className="section-header">
        <div className="section-badge">✨ Xidmətlərimiz</div>
        <h2 className="section-title">Hərtərəfli Psixoloji Dəstək</h2>
        <p className="section-subtitle">
          Zehni sağlamlığınız üçün elmi yanaşma və müasir texnologiyaların
          birləşdiyi peşəkar xidmətlər təqdim edirik!
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-clipboard-check"></i>
          </div>
          <h3 className="service-title">Elmi Psixoloji Testlər</h3>
          <p className="service-desc">
            Beynəlxalq standartlara uyğun hazırlanmış stress, depressiya və
            anksiyete testləri ilə durumunuzu dəqiq qiymətləndirin.
          </p>
          <Link to={'/quiz'} className="service-link">
            Test et <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-video"></i>
          </div>
          <h3 className="service-title">Online Terapiya Seansları</h3>
          <p className="service-desc">
            Sertifikatlı psixoloqlarla video çağrı və ya mesajlaşma yolu ilə
            fərdi terapiya seansları keçirin.
          </p>
          <Link to={'/'}  className="service-link">
            Başla <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <h3 className="service-title">Ağıllı Randevu Sistemi</h3>
          <p className="service-desc">
            Google Calendar inteqrasiyası ilə həkimlərin uyğun vaxtlarını görün
            və randevu təyin edin.
          </p>
          <Link to={'/doctor'} className="service-link">
            Randevu al <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-robot"></i>
          </div>
          <h3 className="service-title">AI Psixoloji Məsləhətçi</h3>
          <p className="service-desc">
            24/7 mövcud olan süni intellekt köməkçimizdən anında cavablar alın
            və ilkin dəstək götürün.
          </p>
          <Link to={'/ai'} className="service-link">
            Soruş <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-book-open"></i>
          </div>
          <h3 className="service-title">Ekspert Blog Məqalələri</h3>
          <p className="service-desc">
            Həkimlərimizin yazdığı faydalı məqalələr və psixoloji sağlamlıq üzrə
            məsləhətləri oxuyun.
          </p>
          <Link  to={'/blogs'} className="service-link">
            Oxu <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <h3 className="service-title">Şəxsi İrəliləyiş Takibi</h3>
          <p className="service-desc">
            Test nəticələrinizi və terapiya prossesinizi izləyin,
            irəliləyişinizi görün və məqsədlər qoyun.
          </p>
          <Link to={'/about'} className="service-link">
            İzlə <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection