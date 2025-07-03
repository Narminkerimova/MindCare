import './style.css'
import {Link} from 'react-router'
import Center1 from './../../../assets/center1.jpeg'
import Center2 from './../../../assets/center2.jpeg'
import Center3 from './../../../assets/center3.jpeg'
import Center4 from './../../../assets/center4.jpeg'


function CentersSection() {
  return (
    <section className="medical-centers" id="medical-centers">
      <div className="section-header">
        <div className="section-badge">🏥 Mərkəzlər</div>
        <h2 className="section-title">Psixoloji Dəstək Mərkəzləri</h2>
        <p className="section-subtitle">
          Bakı və digər şəhərlərdə yerləşən etibarlı psixoloji dəstək mərkəzlərimiz
        </p>
      </div>

      <div className="centers-grid">
        <div className="center-card">
          <div
            className="center-image">
                <img src={Center1} alt="center image" />
            </div>
          <div className="center-info">
            <h3 className="center-name">Psixi Sağlamlıq Mərkəzi</h3>
            <div className="center-location">
              <i className="fas fa-map-marker-alt"></i>
              Bakı, Nərimanov rayonu
            </div>
            <div className="center-rating">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="rating-text">4.8 (124 rəy)</span>
            </div>
            <div className="center-specialties">
              <span>Uşaq psixologiyası</span>
              <span>Ailə terapiyası</span>
              <span>Klinik psixologiya</span>
            </div>
            <div className="center-contact">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+994 12 555 55 55</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <span>09:00 - 18:00</span>
              </div>
            </div>
            <Link to={'/centers'}  className="btn btn-outline center-btn">
              <i className="fas fa-info-circle"></i>
              Ətraflı məlumat
            </Link>
          </div>
        </div>

        <div className="center-card">
          <div
            className="center-image"          >
            <img src={Center2} alt="center image" />
          </div>
          <div className="center-info">
            <h3 className="center-name">Zərif Psixologiya Mərkəzi</h3>
            <div className="center-location">
              <i className="fas fa-map-marker-alt"></i>
              Bakı, Yasamal rayonu
            </div>
            <div className="center-rating">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <span className="rating-text">4.6 (89 rəy)</span>
            </div>
            <div className="center-specialties">
              <span>Depresiya</span>
              <span>Anksiyete</span>
              <span>Stres idarəetmə</span>
            </div>
            <div className="center-contact">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+994 12 444 44 44</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <span>08:30 - 19:00</span>
              </div>
            </div>
            <Link to={'#'}  className="btn btn-outline center-btn">
              <i className="fas fa-info-circle"></i>
              Ətraflı məlumat
            </Link>
          </div>
        </div>

        <div className="center-card">
          <div
            className="center-image">
                <img src={Center3} alt="center image" />
            </div>
          <div className="center-info">
            <h3 className="center-name">Harmoniya Psixoterapiya Mərkəzi</h3>
            <div className="center-location">
              <i className="fas fa-map-marker-alt"></i>
              Sumqayıt
            </div>
            <div className="center-rating">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="rating-text">4.9 (156 rəy)</span>
            </div>
            <div className="center-specialties">
              <span>Stress</span>
              <span>Əlaqələr üzrə məsləhət</span>
              <span>Peşəkar kömək</span>
            </div>
            <div className="center-contact">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+994 18 333 33 33</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <span>09:00 - 20:00</span>
              </div>
            </div>
            <Link to={'#'}  className="btn btn-outline center-btn">
              <i className="fas fa-info-circle"></i>
              Ətraflı məlumat
            </Link>
          </div>
        </div>

        <div className="center-card">
          <div
            className="center-image">
                <img src={Center4} alt="center image" />
            </div>
          <div className="center-info">
            <h3 className="center-name">Əqli Sağlamlıq Mərkəzi</h3>
            <div className="center-location">
              <i className="fas fa-map-marker-alt"></i>
              Bakı, Səbail rayonu
            </div>
            <div className="center-rating">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <span className="rating-text">4.7 (203 rəy)</span>
            </div>
            <div className="center-specialties">
              <span>Travma terapiyası</span>
              <span>Yeniyetmə psixologiyası</span>
              <span>Qrup terapiyası</span>
            </div>
            <div className="center-contact">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+994 12 222 22 22</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <span>24/7 Xidmət</span>
              </div>
            </div>
            <Link to={'#'}  className="btn btn-outline center-btn">
              <i className="fas fa-info-circle"></i>
              Ətraflı məlumat
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CentersSection;
