import { Link } from "react-router";
import Center1 from './../../../assets/center1.jpeg'
import Center2 from './../../../assets/center2.jpeg'
import Center3 from './../../../assets/center3.jpeg'
import Center4 from './../../../assets/center4.jpeg'
import "./style.css";

function CentersCards() {
  return (
    <section className="centers-section">
      <div className="centers-container">
        <div className="centers-grid" id="centersGrid">
          <div className="center-card" data-city="baku">
            <div className="center-header">
              <div className="center-image">
                <img src={Center1} alt="center image" />
                <div className="center-status">
                  <i className="fas fa-circle"></i>
                  Açıq
                </div>
              </div>
            </div>
            <div className="center-content">
              <div className="center-info">
                <h3 className="center-name">MindCare Nəsimi</h3>
                <div className="center-location">
                  <i className="fas fa-map-marker-alt"></i>
                  Nəsimi r-nu, Azadlıq pr. 12, Bakı
                </div>
                <div className="center-contact">
                  <i className="fas fa-phone"></i>
                  (012) 555-0101
                </div>
              </div>

              <div className="center-services">
                <div className="service-tag">Fərdi Terapiya</div>
                <div className="service-tag">Qrup Terapiyası</div>
                <div className="service-tag">Uşaq Psixologiyası</div>
              </div>

              <div className="center-stats">
                <div className="stat-item">
                  <i className="fas fa-user-md"></i>
                  <span>12 həkim</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-clock"></i>
                  <span>09:00 - 21:00</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-star"></i>
                  <span>4.9 (156 rəy)</span>
                </div>
              </div>

              <div className="center-actions">
                <Link to={"/about"} className="btn btn-outline">
                  <i className="fas fa-info-circle"></i>
                  Xəritədə aç
                </Link>
              </div>
            </div>
          </div>

          <div className="center-card" data-city="baku">
            <div className="center-header">
              <div className="center-image">
                <img src={Center1} alt="center image" />
                <div className="center-status">
                  <i className="fas fa-circle"></i>
                  Açıq
                </div>
              </div>
            </div>
            <div className="center-content">
              <div className="center-info">
                <h3 className="center-name">PsyCenter Yasamal</h3>
                <div className="center-location">
                  <i className="fas fa-map-marker-alt"></i>
                  Yasamal r-nu, Zərdabi küç. 89, Bakı
                </div>
                <div className="center-contact">
                  <i className="fas fa-phone"></i>
                  (012) 555-0102
                </div>
              </div>

              <div className="center-services">
                <div className="service-tag">Ailə Terapiyası</div>
                <div className="service-tag">Stress İdarəetmə</div>
                <div className="service-tag">Online Xidmət</div>
              </div>

              <div className="center-stats">
                <div className="stat-item">
                  <i className="fas fa-user-md"></i>
                  <span>8 həkim</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-clock"></i>
                  <span>08:00 - 20:00</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-star"></i>
                  <span>4.7 (98 rəy)</span>
                </div>
              </div>

              <div className="center-actions">
                <Link to={"about"} className="btn btn-primary">
                  <i className="fas fa-calendar-check"></i>
                  Randevu Al
                </Link>
                <Link to={"about"} className="btn btn-outline">
                  <i className="fas fa-info-circle"></i>
                  Ətraflı
                </Link>
              </div>
            </div>
          </div>

          <div className="center-card" data-city="baku">
            <div className="center-header">
              <div className="center-image">
                <img src={Center2} alt="center image" />
                <div className="center-status">
                  <i className="fas fa-circle"></i>
                  Açıq
                </div>
              </div>
            </div>
            <div className="center-content">
              <div className="center-info">
                <h3 className="center-name">PsyCenter Səbail</h3>
                <div className="center-location">
                  <i className="fas fa-map-marker-alt"></i>
                  Səbail r-nu, Nizami küç. 45, Bakı
                </div>
                <div className="center-contact">
                  <i className="fas fa-phone"></i>
                  (012) 555-0103
                </div>
              </div>

              <div className="center-services">
                <div className="service-tag">Travma Terapiyası</div>
                <div className="service-tag">Anksiyete</div>
                <div className="service-tag">Depresiya ilə mübarizə</div>
              </div>

              <div className="center-stats">
                <div className="stat-item">
                  <i className="fas fa-user-md"></i>
                  <span>10 həkim</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-clock"></i>
                  <span>09:00 - 19:00</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-star"></i>
                  <span>4.8 (127 rəy)</span>
                </div>
              </div>

              <div className="center-actions">
                <Link to={"/about"} className="btn btn-primary">
                  <i className="fas fa-calendar-check"></i>
                  Randevu Al
                </Link>
                <Link to={"/about"} className="btn btn-outline">
                  <i className="fas fa-info-circle"></i>
                  Ətraflı
                </Link>
              </div>
            </div>
          </div>

          <div className="center-card" data-city="ganja">
            <div className="center-header">
              <div className="center-image">
                <img src={Center3} alt="center image" />
                <div className="center-status">
                  <i className="fas fa-circle"></i>
                  Açıq
                </div>
              </div>
            </div>
            <div className="center-content">
              <div className="center-info">
                <h3 className="center-name">PsyCenter Gəncə</h3>
                <div className="center-location">
                  <i className="fas fa-map-marker-alt"></i>
                  Kəpəz r-nu, Heydər Əliyev pr. 28, Gəncə
                </div>
                <div className="center-contact">
                  <i className="fas fa-phone"></i>
                  (022) 555-0201
                </div>
              </div>

              <div className="center-services">
                <div className="service-tag">Fərdi Terapiya</div>
                <div className="service-tag">Ailə Məsləhəti</div>
                <div className="service-tag">Yeniyetmə</div>
              </div>

              <div className="center-stats">
                <div className="stat-item">
                  <i className="fas fa-user-md"></i>
                  <span>6 həkim</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-clock"></i>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-star"></i>
                  <span>4.6 (74 rəy)</span>
                </div>
              </div>

              <div className="center-actions">
                <Link to={"/about"} className="btn btn-primary">
                  <i className="fas fa-calendar-check"></i>
                  Randevu Al
                </Link>
                <Link to={"/about"} className="btn btn-outline">
                  <i className="fas fa-info-circle"></i>
                  Ətraflı
                </Link>
              </div>
            </div>
          </div>

          <div className="center-card" data-city="sumqayit">
            <div className="center-header">
              <div className="center-image">
                <img src={Center4} alt="center image" />
                <div className="center-status">
                  <i className="fas fa-circle"></i>
                  Açıq
                </div>
              </div>
            </div>
            <div className="center-content">
              <div className="center-info">
                <h3 className="center-name">PsyCenter Sumqayıt</h3>
                <div className="center-location">
                  <i className="fas fa-map-marker-alt"></i>
                  28-ci məhəllə, Tbilisi pr. 67, Sumqayıt
                </div>
                <div className="center-contact">
                  <i className="fas fa-phone"></i>
                  (018) 555-0301
                </div>
              </div>

              <div className="center-services">
                <div className="service-tag">Mesleki Stress</div>
                <div className="service-tag">Fərdi Terapiya</div>
                <div className="service-tag">Online Dəstək</div>
              </div>

              <div className="center-stats">
                <div className="stat-item">
                  <i className="fas fa-user-md"></i>
                  <span>5 həkim</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-clock"></i>
                  <span>08:30 - 19:30</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-star"></i>
                  <span>4.5 (52 rəy)</span>
                </div>
              </div>

              <div className="center-actions">
                <Link to={"/about"} className="btn btn-primary">
                 <i className="fas fa-calendar-check"></i>
                  Randevu Al
                </Link>
                <Link to={"/about"} className="btn btn-outline">
                 <i className="fas fa-info-circle"></i>
                  Ətraflı
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CentersCards;
