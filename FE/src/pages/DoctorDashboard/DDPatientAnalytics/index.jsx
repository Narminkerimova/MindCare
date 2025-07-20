
function DDPatientAnalytics() {
  return (
                    <div className="dashboard-card analytics-card">
                    <div className="card-header">
                        <h3>Xəstə Analitikası</h3>
                        <select className="period-select">
                            <option>Bu həftə</option>
                            <option>Bu ay</option>
                            <option>Bu il</option>
                        </select>
                    </div>
                    
                    <div className="analytics-content">
                        <div className="chart-placeholder">
                            <i className="fas fa-chart-line"></i>
                            <p>Xəstə aktivliyi qrafiki</p>
                        </div>
                        
                        <div className="analytics-summary">
                            <div className="summary-item">
                                <span className="summary-label">Yeni xəstələr</span>
                                <span className="summary-value">12</span>
                            </div>
                            <div className="summary-item">
                                <span className="summary-label">Tamamlanan seanslar</span>
                                <span className="summary-value">45</span>
                            </div>
                            <div className="summary-item">
                                <span className="summary-label">Ləğv edilmiş randevular</span>
                                <span className="summary-value">3</span>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default DDPatientAnalytics