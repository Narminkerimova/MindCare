import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthProvider.jsx";
import "./style.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
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
    <header className="header" id="header">
      <nav className="nav">
        <NavLink to={"/"} className="logo">
          <div className="logo-icon">
            <i className="fas fa-brain"></i>
          </div>
          MindCare
        </NavLink>

        <ul className="nav-menu">
          <li>
            <Link to={"/quiz"} className="nav-link">
              Testlər
            </Link>
          </li>
          <li>
            <Link to={"/doctors"} className="nav-link">
              Həkimlər
            </Link>
          </li>
          <li>
            <Link to={"/blog"} className="nav-link">
              Blog
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="nav-link">
              Haqqımızda
            </Link>
          </li>
          <li>
            <Link to={"/centers"} className="nav-link">
              Mərkəzlər
            </Link>
          </li>
        </ul>

        <div className="nav-actions">
          {isAuthenticated ? (
            <>
              <Link to={"/userdashboard"} className="btn btn-outline">
                <i className="fas fa-user"></i>
                {user?.user?.username || user?.username || "Profil"}
              </Link>
              <button onClick={handleLogout} className="btn btn-primary">
                <i className="fas fa-sign-out-alt"></i>
                Çıxış
              </button>
            </>
          ) : (
            <>
              <Link to={"/loginregister"} className="btn btn-outline">
                <i className="fas fa-sign-in-alt"></i>
                Giriş
              </Link>
              <Link to={"/loginregister"} className="btn btn-primary">
                <i className="fas fa-user-plus"></i>
                Qeydiyyat
              </Link>
            </>
          )}
        </div>

        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-list">
            <li>
              <Link to={"/"} className="mobile-nav-link" onClick={closeMenu}>
                Ana Səhifə
              </Link>
            </li>
            <li>
              <Link to={"/quiz"} className="mobile-nav-link" onClick={closeMenu}>
                Testlər
              </Link>
            </li>
            <li>
              <Link to={"/doctors"} className="mobile-nav-link" onClick={closeMenu}>
                Həkimlər
              </Link>
            </li>
            <li>
              <Link to={"/blog"} className="mobile-nav-link" onClick={closeMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="mobile-nav-link" onClick={closeMenu}>
                Haqqımızda
              </Link>
            </li>
            <li>
              <Link to={"/centers"} className="mobile-nav-link" onClick={closeMenu}>
                Mərkəzlər
              </Link>
            </li>
            
            {isAuthenticated ? (
              <>
                <li>
                  <Link to={"/userdashboard"} className="mobile-nav-link" onClick={closeMenu}>
                    <i className="fas fa-user"></i>
                    Profil
                  </Link>
                </li>
                <li className="mobile-auth">
                  <button onClick={handleLogout} className="btn btn-primary mobile-auth-btn">
                    <i className="fas fa-sign-out-alt"></i>
                    Çıxış
                  </button>
                </li>
              </>
            ) : (
              <li className="mobile-auth">
                <Link to={"/loginregister"} className="btn btn-primary mobile-auth-btn" onClick={closeMenu}>
                  <i className="fas fa-user"></i>
                  Giriş / Qeydiyyat
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;