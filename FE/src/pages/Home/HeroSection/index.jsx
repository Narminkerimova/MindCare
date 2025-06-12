import { Link } from "react-router";
import "./style.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-sparkles"></i>
            AI ilə gücləndirilmiş psixoloji dəstək
          </div>

          <h1 className="hero-title">
            Zehninizin
            <br />
            sağlamlığı <br />
            bizim prioritetimizdir
          </h1>

          <p className="hero-subtitle">
            Peşəkar psixoloqlar, AI köməkçisi və elmi testlərlə dəstəklənən
            rəqəmsal platform. Stress və depressiyadan qurtulmaq üçün ilk
            addımınızı atın.
          </p>

          <div className="hero-actions">
            <Link to={"/quiz"} className="btn btn-primary">
              <i className="fas fa-play"></i>
              Pulsuz Test Başlat
            </Link>
            <Link to={"/doctors"}  class="btn btn-outline">
              <i className="fas fa-calendar-check"></i>
              Həkim Randevusu
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Xoşbəxt istifadəçi</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Peşəkar həkim</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">AI dəstək</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card card-1">
            <div
              className="card-icon"
              style={{ background: "var(--gradient-main)", color: "white" }}
            >
              <i className="fas fa-brain"></i>
            </div>
            <h3 className="card-title">Stress Analizi</h3>
            <p className="card-desc">
              Stress səviyyənizi real vaxtda ölçün və nəticələri alın
            </p>
          </div>

          <div className="visual-card card-2">
            <div
              className="card-icon"
              style={{ background: "var(--gradient-warm)", color: "white" }}
            >
              <i className="fas fa-comments"></i>
            </div>
            <h3 className="card-title">Canlı Chat</h3>
            <p className="card-desc">
              Həkimlərlə birbaşa əlaqə qurun və məsləhət alın
            </p>
          </div>

          <div className="visual-card card-3">
            <div
              className="card-icon"
              style={{
                background: "linear-gradient(135deg, #6c5ce7, #a29bfe)",
                color: "white",
              }}
            >
              <i className="fas fa-robot"></i>
            </div>
            <h3 className="card-title">AI Köməkçi</h3>
            <p className="card-desc">24/7 suallarınıza anında cavab alın</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
