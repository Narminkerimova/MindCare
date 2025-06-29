import './style.css'

function AboutCTA() {
  return (
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">
              Bizimlə Birlikdə Psixoloji Sağlamlığa Addım Atın
            </h2>
            <p className="cta-subtitle">
              İlk test pulsuz! Dərhal başlayın və özünüzü daha yaxşı tanıyın.
            </p>
            <div className="cta-buttons">
              <a href="#" className="btn btn-white">
                <i className="fas fa-play"></i>
                Pulsuz Test Başlat
              </a>
              <a href="#" className="btn btn-outline-white">
                <i className="fas fa-phone"></i>
                Bizimlə Əlaqə
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutCTA