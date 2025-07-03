import { Link } from "react-router";
import "./style.css";
function UserHeader() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">
            <Link to={"/"}>
              <i className="fas fa-brain"></i>
            </Link>
          </div>
              <span className="logo-text">MindCare</span>
        </div>

        <div className="header-actions">
          <div className="notifications desktop-only">
            <i className="fas fa-bell"></i>
            <span className="notification-badge">3</span>
          </div>
          <div className="user-menu desktop-only">
            <div className="user-avatar">AH</div>
            <div className="user-info">
              <span className="user-name">Aynur Həsənova</span>
              <span className="user-role">Pasiyent</span>
            </div>
            <i className="fas fa-chevron-down"></i>
          </div>

          <div className="mobile-profile-button mobile-only">
            <i className="fas fa-user-circle"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default UserHeader;
