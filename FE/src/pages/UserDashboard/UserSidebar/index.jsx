import { NavLink } from "react-router";
import './style.css'

function UserSidebar() {
  return (
    <aside className="sidebar-user">
      <NavLink to="/" className={({ isActive }) => isActive ? "user-link active" : "user-link"}>
        <i className="fas fa-home"></i>
        <span>Ana Səhifə</span>
      </NavLink>
      <NavLink to="/quiz" className={({ isActive }) => isActive ? "user-link active" : "user-link"}>
        <i className="fas fa-clipboard-check"></i>
        <span>Test Nəticələri</span>
      </NavLink>
      <NavLink to="/doctor" className={({ isActive }) => isActive ? "user-link active" : "user-link"}>
        <i className="fas fa-user-md"></i>
        <span>Həkimim</span>
      </NavLink>
      <NavLink to="/appointments" className={({ isActive }) => isActive ? "user-link active" : "user-link"}>
        <i className="fas fa-calendar-alt"></i>
        <span>Randevular</span>
      </NavLink>
      <NavLink to="/messages" className={({ isActive }) => isActive ? "user-link active" : "user-link"}>
        <i className="fas fa-comments"></i>
        <span>Mesajlar</span>
      </NavLink>
      <NavLink to="/progress" className={({ isActive }) => isActive ? "user-link active" : "user-link"}>
        <i className="fas fa-chart-line"></i>
        <span>İrəliləyiş</span>
      </NavLink>
      <NavLink to="/settings" className={({ isActive }) => isActive ? "user-link active" : "user-link"}>
        <i className="fas fa-cog"></i>
        <span>Parametrlər</span>
      </NavLink>
    </aside>
  );
}

export default UserSidebar;
