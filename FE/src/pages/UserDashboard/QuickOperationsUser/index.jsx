import {Link} from 'react-router'
import "./style.css";

function QuickOperationsUser() {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h3 className="card-title">
          <i className="fas fa-bolt"></i>
          Tez Əməliyyatlar
        </h3>
      </div>
      <div className="card-content">
        <div className="quick-actions">
          <Link to={"/quiz"} className="quick-action">
            <i className="fas fa-plus"></i>
            <span>Yeni Test</span>
          </Link>
          <Link to={"/doctors"} className="quick-action">
            <i className="fas fa-calendar-plus"></i>
            <span>Randevu Al</span>
          </Link>
          <Link to={"/"} className="quick-action">
            <i className="fas fa-robot"></i>
            <span>AI Köməkçi</span>
          </Link>
          <Link to={"/blog"} className="quick-action">
            <i className="fas fa-book"></i>
            <span>Məqalələr</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuickOperationsUser;
