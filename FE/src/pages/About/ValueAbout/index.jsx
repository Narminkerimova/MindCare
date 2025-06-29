import './style.css'

function ValueAbout() {
  return (
    <section className="values-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">⭐ Dəyərlərimiz</div>
            <h2 className="section-title">Bizim Prinsiplərimiz</h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Empatiya</h3>
              <p>Hər insanın hisslərini başa düşmək və dəstək olmaq</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-microscope"></i>
              </div>
              <h3>Elmi Yanaşma</h3>
              <p>Sübut edilmiş metodlar və beynəlxalq standartlar</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lock"></i>
              </div>
              <h3>Məxfilik</h3>
              <p>Şəxsi məlumatların tam təhlükəsizliyi və gizliliyi</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Əlçatanlıq</h3>
              <p>Hər kəs üçün münasib və keyfiyyətli xidmət</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ValueAbout