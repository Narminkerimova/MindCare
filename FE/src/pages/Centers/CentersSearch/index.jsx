import './style.css'

function CentersSearch() {
  return (
    <section className="search-section">
        <div className="search-container">
            <div className="search-box">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Şəhər və ya mərkəz adı ilə axtar..." id="searchInput"/>
            </div>
            <div className="filter-buttons">
                <button className="filter-btn active" data-city="all">
                    <i className="fas fa-globe"></i>
                    Hamısı
                </button>
                <button className="filter-btn" data-city="baku">
                    <i className="fas fa-building"></i>
                    Bakı
                </button>
                <button className="filter-btn" data-city="ganja">
                    <i className="fas fa-city"></i>
                    Gəncə
                </button>
                <button className="filter-btn" data-city="sumqayit">
                    <i className="fas fa-industry"></i>
                    Sumqayıt
                </button>
            </div>
        </div>
    </section>
  )
}

export default CentersSearch