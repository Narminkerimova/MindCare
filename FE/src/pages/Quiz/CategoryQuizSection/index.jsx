import CategoryType from "./CategoryType/index.jsx"
import AllCategories from "./AllCategories/index.jsx"
import MostPopularQuiz from "./MostPopularQuiz/index.jsx"
import AIAsistantQuiz from "./AIAsistantQuiz/index.jsx"
import './style.css'

function CategoryQuizSection() {
  return (
     <section className="quiz-categories">
        <div className="container">
            <div className="quiz-head">
                <h2 className="quiz-title">Test Kateqoriyaları</h2>
                <p className="quiz-subtitle">Hiss etdiyiniz problemə uyğun test kateqoriyasını seçin</p>
            </div>
          <CategoryType/>
          <AllCategories/>
          <MostPopularQuiz/>
        </div>
          <AIAsistantQuiz/>
    </section>
  )
}

export default CategoryQuizSection