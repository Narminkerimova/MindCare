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
              Psixoloji sağlamlığınız bizim prioritetimizdir. Peşəkar dəstək və
              müasir texnologiyalar ilə sizə kömək edirik.
            </p>
          </div>

          <div className="footer-section">
            <h3>Əlaqə</h3>
            <p>📞 <a href="tel:+994 55 912 27 29">+994 55 912 27 29</a></p>
            <p>📧 <a href="mailto:narminkerimovaa@gmail.com">narminkerimovaa@gmail.com</a></p>
            <p>📍 Bakı, Azərbaycan</p>
            <p>📸 <a href="https://instagram.com/mindcare.az" target="_blank" rel="noopener noreferrer">@mindcare.az</a></p>
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
              <Link to="/quiz">Testlər</Link>
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
