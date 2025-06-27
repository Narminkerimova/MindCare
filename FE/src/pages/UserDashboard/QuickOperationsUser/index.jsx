import './style.css'

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
                  <button className="quick-action">
                    <i className="fas fa-plus"></i>
                    <span>Yeni Test</span>
                  </button>
                  <button className="quick-action">
                    <i className="fas fa-calendar-plus"></i>
                    <span>Randevu Al</span>
                  </button>
                  <button className="quick-action">
                    <i className="fas fa-robot"></i>
                    <span>AI Köməkçi</span>
                  </button>
                  <button className="quick-action">
                    <i className="fas fa-book"></i>
                    <span>Məqalələr</span>
                  </button>
                </div>
              </div>
            </div>
  )
}

export default QuickOperationsUser