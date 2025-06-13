import "./style.css"

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MindCare</h3>
            <p>Mental sağlamlığınız bizim prioritetimizdir. Peşəkar dəstək və müasir texnologiyalar ilə sizə kömək edirik.</p>
          </div>
          
          <div className="footer-section">
            <h3>Əlaqə</h3>
            <p>📞 +994 XX XXX XX XX</p>
            <p>📧 info@mindcare.az</p>
            <p>📍 Bakı, Azərbaycan</p>
          </div>
          
          <div className="footer-section">
            <h3>Sürətli Keçidlər</h3>
            <p><a href="#xidmetler">Xidmətlər</a></p>
            <p><a href="#hekimler">Həkimlərimiz</a></p>
            <p><a href="#blog">Blog</a></p>
            <p><a href="#elaqe">Əlaqə</a></p>
          </div>
        </div>
        
        <hr style={{borderColor: "#4a9d8a", margin: "2rem 0"}} />
        
        <div className="footer-bottom">
          <p>&copy; 2025 MindCare. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer