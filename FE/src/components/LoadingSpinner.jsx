import "./LoadingSpinner.css";

const LoadingSpinner = ({
  size = "medium",
  text = "Yüklənir...",
  showLogo = true,
}) => {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className={`spinner-wrapper ${size}`}>
          <div className="spinner-track"></div>
          <div className="spinner-fill"></div>

          {showLogo && (
            <div className="spinner-logo">
              <i className="fas fa-brain"></i>
            </div>
          )}
        </div>

        <div className="loading-brand">
          <p className="loading-text">{text}</p>
        </div>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
