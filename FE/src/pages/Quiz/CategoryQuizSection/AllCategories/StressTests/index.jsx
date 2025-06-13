
function StressTests() {
  return (
       <div className="quiz-card" data-category="stress">
                    <div className="quiz-header">
                        <div className="quiz-badge stress">Stress</div>
                        <div className="quiz-difficulty easy">Asan</div>
                    </div>
                    <div className="quiz-content">
                        <h3 className="quiz-title-card">Qəbul edilmiş Stress Şkalası</h3>
                        <p className="quiz-desc">Həyatınızdakı stress mənbələrini və təsirini ölçür</p>
                        <div className="quiz-meta">
                            <span><i className="fas fa-questions"></i> 14 sual</span>
                            <span><i className="fas fa-clock"></i> 5-8 dəq</span>
                            <span><i className="fas fa-users"></i> 2.9k istifadəçi</span>
                        </div>
                    </div>
                    <div className="quiz-footer">
                        <button className="btn btn-primary quiz-start" data-quiz="perceived-stress">
                            <i className="fas fa-play"></i>
                            Test Başlat
                        </button>
                    </div>
                </div>
  )
}

export default StressTests