import { Link } from "react-router";
import "./style.css";

function DoctorDashboardSidebar() {
  return (
    <div class="sidebar">
      <div class="sidebar-header">
        <Link to={"/"} class="logo">
          <div class="logo-icon">
            <i class="fas fa-brain"></i>
          </div>
          <span class="logo-text">MindCare</span>
        </Link>
      </div>

      <nav class="sidebar-nav">
        <ul className="nav-menu">
          <li className="nav-item active">
            <Link to={"#"} className="nav-link">
              <i className="fas fa-chart-pie"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"#"} className="nav-link">
              <i className="fas fa-users"></i>
              <span>Xəstələr</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"#"} className="nav-link">
              <i className="fas fa-calendar-check"></i>
              <span>Randevular</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"#"} className="nav-link">
              <i className="fas fa-comments"></i>
              <span>Mesajlar</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"#"} className="nav-link">
              <i className="fas fa-clipboard-list"></i>
              <span>Test Nəticələri</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"#"} className="nav-link">
              <i className="fas fa-video"></i>
              <span>Online Seanslar</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"#"} className="nav-link">
              <i className="fas fa-file-medical"></i>
              <span>Hesabatlar</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div class="sidebar-footer">
        <div class="doctor-profile">
          <div class="doctor-avatar">RƏ</div>
          <div class="doctor-info">
            <h4>Dr. Rəna Əliyeva</h4>
            <p>Klinik Psixoloq</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboardSidebar;
