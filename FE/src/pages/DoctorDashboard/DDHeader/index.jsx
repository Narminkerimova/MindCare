import './style.css'

function DDHeader() {
  return (
     <header className="top-header">
            <div className="header-left">
                <button className="menu-toggle">
                    <i className="fas fa-bars"></i>
                </button>
                <h1 className="page-title">Doctor Dashboard</h1>
            </div>
            
            <div className="header-right">
                <div className="search-box">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Xəstə axtar..."/>
                </div>
                
                <div className="header-actions">
                    <button className="notification-btn">
                        <i className="fas fa-bell"></i>
                        <span className="notification-badge">3</span>
                    </button>
                    
                    <div className="user-menu">
                    </div>
                </div>
            </div>
        </header>
      )
}

      export default DDHeader