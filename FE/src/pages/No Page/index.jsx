import './style.css';

const NoPage = () => {
  return (
    <div className="nopage-container">
      <div className="nopage-content">
        <div className="brain-animation">
          <div className="brain-icon">
            <i className="fas fa-brain"></i>
          </div>
          <div className="pulse-ring"></div>
          <div className="pulse-ring delayed"></div>
        </div>

        <div className="error-code">404</div>

        <div className="nopage-text">
          <h1 className="nopage-title">Səhifə Tapılmadı</h1>
          <p className="nopage-subtitle">
            Axtardığınız səhifə mövcud deyil və ya silinib. 
            Bəlkə də siz yanlış ünvana daxil oldunuz?
          </p>
        </div>


        <div className="nopage-actions">
          <button className="btn btn-primary" onClick={() => window.location.href = '/'}>
            <i className="fas fa-home"></i>
            Ana Səhifəyə Qayıt
          </button>
          <button className="btn btn-outline" onClick={() => window.history.back()}>
            <i className="fas fa-arrow-left"></i>
            Əvvəlki Səhifə
          </button>
        </div>

        <div className="help-section">
          <p className="help-text">
            Hələ də problem yaşayırsınız? 
            <span className="help-link"> Bizə yazın</span> və ya 
            <span className="help-link"> AI köməkçidən</span> yardım alın.
          </p>
        </div>

        <div className="floating-elements">
          <div className="floating-element element-1">
            <i className="fas fa-question"></i>
          </div>
          <div className="floating-element element-2">
            <i className="fas fa-search"></i>
          </div>
          <div className="floating-element element-3">
            <i className="fas fa-lightbulb"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoPage;