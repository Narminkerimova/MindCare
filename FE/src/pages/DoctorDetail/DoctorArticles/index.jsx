import psyc from './../../../assets/psyc.jpg'
import './style.css'

function DoctorArticle() {
  return (
     <section className="doctor-articles">
        <div className="doctor-articles-container">
          <h3 className="section-title">Məqalələr</h3>
          <div className="articles-grid">
            <article className="article-card">
              <div className="article-image">
                <img src={psyc} alt="Stress idarəetməsi" />
              </div>
              <div className="article-content">
                <div className="article-category">Stress İdarəetməsi</div>
                <h4 className="article-title">
                  Gündəlik həyatda stresi necə idarə etmək olar?
                </h4>
                <p className="article-excerpt">
                  Modern həyatın tələbləri bizi tez-tez stress altında qoyur. Bu
                  məqalədə stress idarəetməsinin effektiv yollarını
                  öyrənəcəksiniz.
                </p>
                <div className="article-meta">
                  <span className="article-date">15 İanvar 2025</span>
                  <span className="article-read-time">5 dəq oxu</span>
                </div>
              </div>
            </article>

            <article className="article-card">
              <div className="article-image">
                <img src={psyc} alt="Emosional sağlamlıq" />
              </div>
              <div className="article-content">
                <div className="article-category">Emosional Sağlamlıq</div>
                <h4 className="article-title">Emosional zəkaya gedən yol</h4>
                <p className="article-excerpt">
                  Emosional zəka inkişaf etdirmək üçün praktik məsləhətlər və
                  günlük tətbiq edə biləcəyiniz texnikalar.
                </p>
                <div className="article-meta">
                  <span className="article-date">8 İanvar 2025</span>
                  <span className="article-read-time">7 dəq oxu</span>
                </div>
              </div>
            </article>

            <article className="article-card">
              <div className="article-image">
                <img src={psyc} alt="Yuxu və sağlamlıq" />
              </div>
              <div className="article-content">
                <div className="article-category">Yuxu və Sağlamlıq</div>
                <h4 className="article-title">
                  Keyfiyyətli yuxunun zihinsal sağlamlığa təsiri
                </h4>
                <p className="article-excerpt">
                  Yuxu keyfiyyətinin zihinsel sağlamlığımıza təsirini və daha
                  yaxşı yuxu üçün tövsiyələri araşdırırıq.
                </p>
                <div className="article-meta">
                  <span className="article-date">2 İanvar 2025</span>
                  <span className="article-read-time">6 dəq oxu</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
  )
}

export default DoctorArticle