import './style.css'

function DDHeader() {
  return (
            <header className="dd-top-header">
          <div className="dd-header-left">
            <button className="dd-menu-toggle">
              <i className="fas fa-bars"></i>
            </button>
            <h1 className="dd-page-title">Dashboard</h1>
          </div>

          <div className="dd-header-right">
            <div className="dd-search-box">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Xəstə axtar..." />
            </div>

            <div className="dd-header-actions">
              <button className="dd-notification-btn">
                <i className="fas fa-bell"></i>
                <span className="dd-notification-badge">3</span>
              </button>

              <div className="dd-user-menu">
                <img src="#" alt="Profile" className="user-avatar" />
              </div>
            </div>
          </div>
        </header>
  )
}

export default DDHeader