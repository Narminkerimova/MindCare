import {Link} from 'react-router'
import "./style.css"

function AIAsistantQuiz() {
  return (
    <section className="cta-section">
            <div className="cta-content">
                <h2 className="cta-title">Hələ də qərar verə bilmirsən?</h2>
                <p className="cta-subtitle">AI köməkçimiz sizə ən uyğun testi tövsiyə edə bilər</p>
                <Link to={'/ai'} className="btn btn-primary cta-btn">
                <i className="fas fa-robot"></i>
                    AI Köməkçi ilə Danış
                </Link>
            </div>
    </section>

  )
}

export default AIAsistantQuiz