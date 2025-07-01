
function DepressionTests() {
  return (
    <>
      <div className="quiz-card" data-category="depression">
        <div className="quiz-header">
          <div className="quiz-badge depression">Depresiya</div>
          <div className="quiz-difficulty easy">Asan</div>
        </div>
        <div className="quiz-content">
          <h3 className="quiz-title-card-card">Beck Depresiya İnventarı (BDI-II)</h3>
          <p className="quiz-desc">
            Depresiya əlamətlərinin intensivliyini ölçən standart test
          </p>
          <div className="quiz-meta">
            <span>
              <i className="fas fa-questions"></i> 21 sual
            </span>
            <span>
              <i className="fas fa-clock"></i> 10-15 dəq
            </span>
            <span>
              <i className="fas fa-users"></i> 2.4k istifadəçi
            </span>
          </div>
        </div>
        <div className="quiz-footer">
          <button
            className="btn btn-primary quiz-start"
            data-quiz="beck-depression"
          >
            <i className="fas fa-play"></i>
            Test Başlat
          </button>
        </div>
      </div>

      <div className="quiz-card" data-category="depression">
        <div className="quiz-header">
          <div className="quiz-badge depression">Depresiya</div>
          <div className="quiz-difficulty medium">Orta</div>
        </div>
        <div className="quiz-content">
          <h3 className="quiz-title-card">Hamilton Depresiya Reytinq Şkalası</h3>
          <p className="quiz-desc">
            Klinik depresiya səviyyəsinin dərin analizi
          </p>
          <div className="quiz-meta">
            <span>
              <i className="fas fa-questions"></i> 17 sual
            </span>
            <span>
              <i className="fas fa-clock"></i> 12-18 dəq
            </span>
            <span>
              <i className="fas fa-users"></i> 1.8k istifadəçi
            </span>
          </div>
        </div>
        <div className="quiz-footer">
          <button
            className="btn btn-primary quiz-start"
            data-quiz="hamilton-depression"
          >
            <i className="fas fa-play"></i>
            Test Başlat
          </button>
        </div>
      </div>
    </>
  );
}

export default DepressionTests;
