import "./style.css"

function CentersSection() {
  return (
 <section className="medical-centers" id="medical-centers">
        <div className="section-header">
            <div className="section-badge">🏥 Mərkəzlər</div>
            <h2 className="section-title">Psixoloji Dəstək Mərkəzləri</h2>
            <p className="section-subtitle">
                Bakı və digər şəhərlərdə yerləşən etibarlı psixoloji dəstək mərkəzləri
            </p>
        </div>

        <div className="centers-grid">
            <div className="center-card">
                <div className="center-image" style={{backgroundImage: "url('https://via.placeholder.com/400x250')"}}></div>
                <div className="center-info">
                    <h3 className="center-name">Psixi Sağlamlıq Mərkəzi</h3>
                    <div className="center-location">
                        <i className="fas fa-map-marker-alt"></i>
                        Bakı, Nərimanov rayonu
                    </div>
                    <div className="center-specialties">
                        <span>Uşaq psixologiyası</span>
                        <span>Ailə terapiyası</span>
                        <span>Klinik psixologiya</span>
                    </div>
                    <a href="#" className="btn btn-outline center-btn">
                        Ətraflı məlumat
                    </a>
                </div>
            </div>

            <div className="center-card">
                <div className="center-image" style={{backgroundImage: "url('https://via.placeholder.com/400x250')"}}></div>
                <div className="center-info">
                    <h3 className="center-name">Zərif Psixologiya Mərkəzi</h3>
                    <div className="center-location">
                        <i className="fas fa-map-marker-alt"></i>
                        Bakı, Yasamal rayonu
                    </div>
                    <div className="center-specialties">
                        <span>Depresiya</span>
                        <span>Anksiyete</span>
                        <span>Stres idarəetmə</span>
                    </div>
                    <a href="#" className="btn btn-outline center-btn">
                        Ətraflı məlumat
                    </a>
                </div>
            </div>

            <div className="center-card">
                <div className="center-image" style={{backgroundImage: "url('https://via.placeholder.com/400x250')"}}></div>
                <div className="center-info">
                    <h3 className="center-name">Harmoniya Psixoterapiya Mərkəzi</h3>
                    <div className="center-location">
                        <i className="fas fa-map-marker-alt"></i>
                        Sumqayıt
                    </div>
                    <div className="center-specialties">
                        <span>Stress</span>
                        <span>Əlaqələr üzrə məsləhət</span>
                        <span>Peşəkar kömək</span>
                    </div>
                    <a href="#" className="btn btn-outline center-btn">
                        Ətraflı məlumat
                    </a>
                </div>
            </div>
        </div>
    </section>
)
}

export default CentersSection