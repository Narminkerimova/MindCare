import { Link } from 'react-router';
import styles from './style.module.css'; // ✅ Düzgün import

function Footer() {
  return (
    <footer className={styles.footer}> {/* Module CSS class */}
      <div className={styles.container}> {/* Module CSS class */}
        <div className={styles.footerContent}> {/* Module CSS class */}
          <div className={styles.footerSection}> {/* Module CSS class */}
            <h3>MindCare</h3>
            <p>
              Mental sağlamlığınız bizim prioritetimizdir. Peşəkar dəstək və
              müasir texnologiyalar ilə sizə kömək edirik.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h3>Əlaqə</h3>
            <p>📞 +994 XX XXX XX XX</p>
            <p>📧 info@mindcare.az</p>
            <p>📍 Bakı, Azərbaycan</p>
          </div>

          <div className={styles.footerSection}>
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

        <div className={styles.footerBottom}>
          <p>&copy; 2025 MindCare. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
