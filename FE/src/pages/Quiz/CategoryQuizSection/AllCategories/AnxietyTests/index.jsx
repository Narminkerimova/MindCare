function AnxietyTests() {
  return (
    <>
      <div className="quiz-card" data-category="anxiety">
        <div className="quiz-header">
          <div className="quiz-badge anxiety">Anksiyete</div>
          <div className="quiz-difficulty easy">Asan</div>
        </div>
        <div className="quiz-content">
          <h3 className="quiz-title-card">Beck Anksiyete İnventarı (BAI)</h3>
          <p className="quiz-desc">
            Anksiyete səviyyəsini və fiziki əlamətləri qiymətləndirir
          </p>
          <div className="quiz-meta">
            <span>
              <i className="fas fa-questions"></i> 21 sual
            </span>
            <span>
              <i className="fas fa-clock"></i> 5-10 dəq
            </span>
            <span>
              <i className="fas fa-users"></i> 3.1k istifadəçi
            </span>
          </div>
        </div>
        <div className="quiz-footer">
          <button className="btn btn-primary quiz-start" data-quiz="beck-anxiety">
            <i className="fas fa-play"></i>
            Test Başlat
          </button>
        </div>
      </div>

      <div className="quiz-card" data-category="anxiety">
        <div className="quiz-header">
          <div className="quiz-badge anxiety">Anksiyete</div>
          <div className="quiz-difficulty medium">Orta</div>
        </div>
        <div className="quiz-content">
          <h3 className="quiz-title-card">GAD-7 (Ümumi Anksiyete)</h3>
          <p className="quiz-desc">Ümumi anksiyete pozğunluğunun skrininq testi</p>
          <div className="quiz-meta">
            <span>
              <i className="fas fa-questions"></i> 7 sual
            </span>
            <span>
              <i className="fas fa-clock"></i> 3-7 dəq
            </span>
            <span>
              <i className="fas fa-users"></i> 4.7k istifadəçi
            </span>
          </div>
        </div>
        <div className="quiz-footer">
          <button className="btn btn-primary quiz-start" data-quiz="gad-7">
            <i className="fas fa-play"></i>
            Test Başlat
          </button>
        </div>
      </div>
    </>
  );
}

export default AnxietyTests;
