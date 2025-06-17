import './style.css'

function CategoriesList() {
  return (
    <section className="quiz-list">
      <div className="container">
        <div className="quiz-tabs">
          <button className="quiz-tab active" data-tab="all">
            <i className="fas fa-list"></i>
            Bütün Testlər
          </button>
          <button className="quiz-tab" data-tab="depression">
            <i className="fas fa-cloud-rain"></i>
            Depresiya
          </button>
          <button className="quiz-tab" data-tab="anxiety">
            <i className="fas fa-heart-pulse"></i>
            Anksiyete
          </button>
          <button className="quiz-tab" data-tab="stress">
            <i className="fas fa-fire"></i>
            Stress
          </button>
          <button className="quiz-tab" data-tab="personality">
            <i className="fas fa-user-check"></i>
            Şəxsiyyət
          </button>
        </div>
      </div>
    </section>
  );
}

export default CategoriesList;
