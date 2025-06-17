import './style.css'

function MostPopularQuiz() {
  return (
 <section className="popular-tests">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Ən Populyar Testlər</h2>
                <p className="section-subtitle">İstifadəçilərimizin ən çox seçdiyi testlər</p>
            </div>

            <div className="popular-grid">
                <div className="popular-card">
                    <div className="popular-rank">1</div>
                    <div className="popular-content">
                        <h4>Beck Depresiya İnventarı</h4>
                        <p>2.4k istifadəçi</p>
                    </div>
                    <div className="popular-rating">
                        <span className="rating">4.8</span>
                        <div className="stars">★★★★★</div>
                    </div>
                </div>

                <div className="popular-card">
                    <div className="popular-rank">2</div>
                    <div className="popular-content">
                        <h4>GAD-7 Anksiyete Testi</h4>
                        <p>4.7k istifadəçi</p>
                    </div>
                    <div className="popular-rating">
                        <span className="rating">4.9</span>
                        <div className="stars">★★★★★</div>
                    </div>
                </div>

                <div className="popular-card">
                    <div className="popular-rank">3</div>
                    <div className="popular-content">
                        <h4>Big Five Şəxsiyyət</h4>
                        <p>5.2k istifadəçi</p>
                    </div>
                    <div className="popular-rating">
                        <span className="rating">4.7</span>
                        <div className="stars">★★★★★</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MostPopularQuiz