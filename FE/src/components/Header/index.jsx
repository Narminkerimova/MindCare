import { useEffect, useState } from "react";
import styles from  "./style.module.css"
import { NavLink } from "react-router";
import { Link } from "react-router";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.header} id="header"> 
      <nav className={styles.nav}>
        <NavLink to={"/"} className={styles.logo}>
          <div className={styles.logoIcon}>
            <i className="fas fa-brain"></i>
          </div>
          MindCare
        </NavLink>

        <ul className={styles.navMenu}>
          <li>
            <Link to={"/"} className={styles.navLink}>
              Ana Səhifə
            </Link>
          </li>
          <li>
            <Link to={"/quiz"} className={styles.navLink}>
              Testlər
            </Link>
          </li>
          <li>
            <Link to={"/doctordashboard"} className={styles.navLink}>
              Həkimlər
            </Link>
          </li>
          <li>
            <Link to={"/blog"} className={styles.navLink}>
              Blog
            </Link>
          </li>
          <li>
            <Link to={"/about"} className={styles.navLink}>
              Haqqımızda
            </Link>
          </li>
        </ul>

   
        <div className={styles.navActions}>
          <Link to={"/loginregister"} className={`${styles.btn} ${styles.btnOutline}`}>
            <i className="fas fa-sign-in-alt"></i>
            Giriş
          </Link>
          <Link to={"/loginregister"} className={`${styles.btn} ${styles.btnPrimary}`}>
            <i className="fas fa-user-plus"></i>
            Qeydiyyat
          </Link>
        </div>

        <button className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.mobileNavList}>
            <li>
              <Link to={"/"} className={styles.mobileNavLink} onClick={closeMenu}>
                Ana Səhifə
              </Link>
            </li>
            <li>
              <Link to={"/quiz"} className={styles.mobileNavLink} onClick={closeMenu}>
                Testlər
              </Link>
            </li>
            <li>
              <Link to={"/doctordashboard"} className={styles.mobileNavLink} onClick={closeMenu}>
                Həkimlər
              </Link>
            </li>
            <li>
              <Link to={"/blog"} className={styles.mobileNavLink} onClick={closeMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to={"/about"} className={styles.mobileNavLink} onClick={closeMenu}>
                Haqqımızda
              </Link>
            </li>
            <li className={styles.mobileAuth}>
              <Link to={"/loginregister"} className={`${styles.btn} ${styles.btnPrimary} ${styles.mobileAuthBtn}`} onClick={closeMenu}>
                <i className="fas fa-user"></i>
                Giriş / Qeydiyyat
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
