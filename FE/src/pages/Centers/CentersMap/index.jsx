import './style.css'

function CentersMap() {
  return (
     <section className="map-section">
        <div className="map-container">
            <div className="map-header">
                <h2 className="map-title">Mərkəzlərimizin Yerləşdiyi Yerlər</h2>
                <p className="map-subtitle">Sizə ən yaxın mərkəzi tapın və rahatlıqla gəlin</p>
            </div>
            <div className="map-placeholder">
                <div className="map-content">
                    <i className="fas fa-map-marked-alt"></i>
                    <h3>İnteraktiv Xəritə</h3>
                    <p>Mərkəzlərimizin dəqiq yerləşməsi və yol göstəricisi</p>
                    <button className="btn btn-primary">
                        <i className="fas fa-map"></i>
                        Xəritəni Aç
                    </button>
                </div>
            </div>
        </div>
    </section>

  )
}

export default CentersMap