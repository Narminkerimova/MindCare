import { Link, NavLink } from "react-router";
import "./style.css"

function Header() {
  return (
    <header className="header" id="header">
      <nav className="nav">
        <NavLink to={"/"} className="logo">
          <div className="logo-icon">
            <i className="fas fa-brain"></i>
          </div>
          PsyCenter
        </NavLink>

        <ul className="nav-menu">
          <li>
            <Link to={"/"} className="nav-link">
              Ana Səhifə
            </Link>
          </li>
          <li>
            <Link to={"/quiz"} className="nav-link">
              Testlər
            </Link>
          </li>
          <li>
            <Link to={"/doctordashboard"} className="nav-link">Həkimlər</Link>
            
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
        </ul>

        <div className="nav-actions">
          <Link to={"/loginregister"} className="btn btn-primary">
            <i className="fas fa-sign-in-alt"></i>
            Giriş
          </Link>
          <Link to={"/loginregister"} className="btn btn-primary">
            <i className="fas fa-user-plus"></i>
            Qeydiyyat
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
