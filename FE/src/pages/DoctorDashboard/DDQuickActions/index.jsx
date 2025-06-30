import './style.css'

function DDQuickActions() {
  return (
                    <div className="dashboard-card quick-actions-card">
                    <div className="card-header">
                        <h3>Sürətli Əməliyyatlar</h3>
                    </div>
                    
                    <div className="quick-actions">
                        <button className="quick-action-btn">
                            <i className="fas fa-user-plus"></i>
                            <span>Yeni Xəstə</span>
                        </button>
                        
                        <button className="quick-action-btn">
                            <i className="fas fa-calendar-plus"></i>
                            <span>Randevu Əlavə Et</span>
                        </button>
                        
                        <button className="quick-action-btn">
                            <i className="fas fa-file-medical"></i>
                            <span>Test Yazı</span>
                        </button>
                        
                        <button className="quick-action-btn">
                            <i className="fas fa-notes-medical"></i>
                            <span>Qeyd Yaz</span>
                        </button>
                        
                        <button className="quick-action-btn">
                            <i className="fas fa-prescription"></i>
                            <span>Resept</span>
                        </button>
                        
                        <button className="quick-action-btn">
                            <i className="fas fa-chart-bar"></i>
                            <span>Hesabat</span>
                        </button>
                    </div>
                </div>
  )
}

export default DDQuickActions