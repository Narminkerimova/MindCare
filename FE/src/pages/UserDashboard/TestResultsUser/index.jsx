import './style.css'

function TestResultsUser() {
  return (
     <div className="dashboard-card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-clipboard-check"></i>
                  Son Test Nəticələri
                </h3>
                <a href="#" className="card-action">
                  Hamısını gör
                </a>
              </div>
              <div className="card-content">
                <div className="quiz-result">
                  <div className="quiz-info">
                    <h4>Stress Səviyyəsi Testi</h4>
                    <span className="quiz-date">3 gün əvvəl</span>
                  </div>
                  <div className="quiz-score moderate">
                    <span className="score-value">65%</span>
                    <span className="score-label">Orta stress</span>
                  </div>
                </div>
                <div className="quiz-result">
                  <div className="quiz-info">
                    <h4>Depresiya Testi (PHQ-9)</h4>
                    <span className="quiz-date">1 həftə əvvəl</span>
                  </div>
                  <div className="quiz-score low">
                    <span className="score-value">23%</span>
                    <span className="score-label">Yüngül</span>
                  </div>
                </div>
                <div className="quiz-result">
                  <div className="quiz-info">
                    <h4>Anksiyete Testi (GAD-7)</h4>
                    <span className="quiz-date">2 həftə əvvəl</span>
                  </div>
                  <div className="quiz-score high">
                    <span className="score-value">78%</span>
                    <span className="score-label">Yüksək</span>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default TestResultsUser