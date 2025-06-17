
function PersonalityTests() {
  return (
     <div className="quiz-card" data-category="personality">
                    <div className="quiz-header">
                        <div className="quiz-badge personality">Şəxsiyyət</div>
                        <div className="quiz-difficulty hard">Çətin</div>
                    </div>
                    <div className="quiz-content">
                        <h3 className="quiz-title-card">Big Five Şəxsiyyət Testi</h3>
                        <p className="quiz-desc">Beş əsas şəxsiyyət xüsusiyyətinizi kəşf edin</p>
                        <div className="quiz-meta">
                            <span><i className="fas fa-questions"></i> 44 sual</span>
                            <span><i className="fas fa-clock"></i> 15-20 dəq</span>
                            <span><i className="fas fa-users"></i> 5.2k istifadəçi</span>
                        </div>
                    </div>
                    <div className="quiz-footer">
                        <button className="btn btn-primary quiz-start" data-quiz="big-five">
                            <i className="fas fa-play"></i>
                            Test Başlat
                        </button>
                    </div>
                </div>
  )
}

export default PersonalityTests