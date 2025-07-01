import {Link} from 'react-router'
import "./style.css"

function AIAsistantQuiz() {
  return (
    <section class="cta-section">
            <div class="cta-content">
                <h2 class="cta-title">Hələ də qərar verə bilmirsən?</h2>
                <p class="cta-subtitle">AI köməkçimiz sizə ən uyğun testi tövsiyə edə bilər</p>
                <Link to={'/ai'} class="btn btn-primary cta-btn">
                <i class="fas fa-robot"></i>
                    AI Köməkçi ilə Danış
                </Link>
            </div>
    </section>

  )
}

export default AIAsistantQuiz