import { Link } from 'react-router';
import './style.css';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MindCare</h3>
            <p>
              Mental sağlamlığınız bizim prioritetimizdir. Peşəkar dəstək və
              müasir texnologiyalar ilə sizə kömək edirik.
            </p>
          </div>

          <div className="footer-section">
            <h3>Əlaqə</h3>
            <p>📞 +994 XX XXX XX XX</p>
            <p>📧 info@mindcare.az</p>
            <p>📍 Bakı, Azərbaycan</p>
            <p>📸 @mindcare.az</p>
          </div>

          <div className="footer-section">
            <h3>Sürətli Keçidlər</h3>
            <p>
              <Link to="/about">Xidmətlər</Link>
            </p>
            <p>
              <Link to="/doctors">Həkimlərimiz</Link>
            </p>
            <p>
              <Link to="/blogs">Blog</Link>
            </p>
            <p>
              <Link to="/about">Əlaqə</Link>
            </p>
          </div>
        </div>

        <hr style={{ borderColor: '#4a9d8a', margin: '2rem 0' }} />

        <div className="footer-bottom">
          <p>&copy; 2025 MindCare. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
