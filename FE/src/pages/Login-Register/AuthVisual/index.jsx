import './style.css'

function AuthVisual() {
  return (
            <div className="auth-visual">
          <div className="visual-content">
            <div className="visual-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h2 className="visual-title">
              Zihinsel Sağlamlığınız Bizim Prioritetimiz
            </h2>
            <p className="visual-description">
              Peşəkar psixoloqlar və AI köməkçi ilə dəstəklənən platformamıza
              xoş gəldiniz. Stress və depresiyaya qarşı mübarizədə ilk
              addımınızı atın.
            </p>
            <div className="visual-features">
              <div className="feature-item">
                <i className="fas fa-shield-alt"></i>
                <span>Tam məxfilik və təhlükəsizlik</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-clock"></i>
                <span>24/7 AI dəstək xidməti</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-user-md"></i>
                <span>50+ sertifikatlı psixoloq</span>
              </div>
            </div>
          </div>

          <div className="floating-card card-1">
            <div className="card-icon">
              <i className="fas fa-heart-pulse"></i>
            </div>
            <div className="card-text">
              <h4>Stress Analizi</h4>
              <p>Real vaxt monitorinq</p>
            </div>
          </div>

          <div className="floating-card card-2">
            <div className="card-icon">
              <i className="fas fa-comments"></i>
            </div>
            <div className="card-text">
              <h4>Canlı Məsləhət</h4>
              <p>Anında dəstək</p>
            </div>
          </div>
        </div>
  )
}

export default AuthVisual