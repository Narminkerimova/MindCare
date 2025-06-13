import AnxietyTests from "./AnxietyTests";
import CategoriesList from "./CategoriesList";
import DepressionTests from "./DepressionTests";
import PersonalityTests from "./PersonalityTests";
import StressTests from "./StressTests";
import  './style.css'

function AllCategories() {
  return (
    <>
      <CategoriesList />
      <div className="quiz-grid" id="quizGrid">
        <DepressionTests />
        <AnxietyTests />
        <StressTests/>
        <PersonalityTests/>
      </div>
    </>
  );
}

export default AllCategories;
