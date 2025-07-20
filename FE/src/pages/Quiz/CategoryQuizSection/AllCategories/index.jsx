import { useContext } from "react";
import {Link} from 'react-router'
import CategoriesList from "./CategoriesList";
import { DataContext } from "./../../../../context/DataProvider.jsx";
import { QuizFilterContext } from "./../../../../context/QuizFilterProvider.jsx";
import LoadingSection from './../../../../components/LoadingSpinner.jsx'
import "./style.css";

function AllCategories() {
  const { data, loading } = useContext(DataContext);
  const { selectedCategory } = useContext(QuizFilterContext);

  if (loading) return <LoadingSection/>;

  const filteredQuizzes = data?.quiz?.filter(quiz => {
    if (selectedCategory === "all") return true;
    return quiz.category === selectedCategory;
  }) || [];

  return (
    <>
      <CategoriesList />
      <div className="quiz-grid" id="quizGrid">
        {filteredQuizzes.length === 0 ? (
          <p>Bu kateqoriyada test tapılmadı.</p>
        ) : (
          filteredQuizzes.map((quiz) => (
            <div key={quiz._id} className="quiz-card" data-category={quiz.category}>
              <div className="quiz-header">
                <div className={`quiz-badge`}>
                  {quiz.category}
                </div>
              </div>
              <div className="quiz-content">
                <h3 className="quiz-title-card">{quiz.title}</h3>
                <p className="quiz-desc">{quiz.description}</p>
                <div className="quiz-meta">
                  <span><i className="fas fa-questions"></i> {quiz.questionCount} sual</span>
                  <span><i className="fas fa-clock"></i> {quiz.timeLimit / 60} dəq</span>
                  <span><i className="fas fa-users"></i> {quiz.users || 0} istifadəçi</span>
                </div>
              </div>
              <div className="quiz-footer">
                <Link to={`/quizdetail/${quiz._id}`} className="btn btn-primary quiz-start">
                  <i className="fas fa-play"></i> Test Başlat
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default AllCategories;