import "./style.css";

function CategoryType() {
  return (
    <div className="container">
      <div className="categories-grid">
        <div className="category-card" data-category="depression">
          <div className="category-icon depression">
            <i className="fa-solid fa-cloud-rain quiz-icons"></i>
          </div>
          <h3 className="category-title">Depresiya Testləri</h3>
          <p className="category-desc">
            Depresiya əlamətlərini qiymətləndirin və səviyyəsini müəyyən edin
          </p>
          <div className="category-info">
            <span className="test-count">4 test</span>
            <span className="duration">5-15 dəq</span>
          </div>
        </div>

        <div className="category-card" data-category="anxiety">
          <div className="category-icon anxiety">
            <i className="fa-solid fa-heart-pulse quiz-icons"></i>
          </div>
          <h3 className="category-title">Anksiyete Testləri</h3>
          <p className="category-desc">
            Narahatlıq və qorxu hisslərinin intensivliyini ölçün
          </p>
          <div className="category-info">
            <span className="test-count">5 test</span>
            <span className="duration">3-10 dəq</span>
          </div>
        </div>

        <div className="category-card" data-category="stress">
          <div className="category-icon stress">
            <i className="fa-solid fa-fire quiz-icons"></i>
          </div>
          <h3 className="category-title">Stress Testləri</h3>
          <p className="category-desc">
            Stress səviyyənizi və idarə etmə qabiliyyətinizi yoxlayın
          </p>
          <div className="category-info">
            <span className="test-count">3 test</span>
            <span className="duration">5-12 dəq</span>
          </div>
        </div>

        <div className="category-card" data-category="personality">
          <div className="category-icon personality">
            <i className="fa-solid fa-user-check quiz-icons"></i>
          </div>
          <h3 className="category-title">Şəxsiyyət Testləri</h3>
          <p className="category-desc">
            Şəxsiyyət xüsusiyyətlərinizi və davranış nümunələrinizi kəşf edin
          </p>
          <div className="category-info">
            <span className="test-count">3 test</span>
            <span className="duration">10-20 dəq</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryType;
