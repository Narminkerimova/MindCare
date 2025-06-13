import './style.css'

function HeroQuizSection() {
  return (
    <section className="quiz-hero">
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-badge">
                    <i className="fas fa-clipboard-check"></i>
                    Elmi əsaslı testlər
                </div>
                <h1 className="hero-title">Psixoloji Sağlamlığınızı <br/>Qiymətləndirin</h1>
                <p className="hero-subtitle">
                    Beynəlxalq standartlara uyğun hazırlanmış testlərlə durumunuzu dəqiq analiz edin və uyğun dəstək alın
                </p>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">15+</span>
                        <span className="stat-label">Müxtəlif test</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">10k+</span>
                        <span className="stat-label">Test tamamlandı</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">98%</span>
                        <span className="stat-label">Dəqiqlik nisbəti</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroQuizSection