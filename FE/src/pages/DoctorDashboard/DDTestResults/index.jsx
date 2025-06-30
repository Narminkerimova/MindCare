import './style.css'

function DDtestResults() {
  return (
                    <div className="dashboard-card test-results-card">
                    <div className="card-header">
                        <h3>Son Test Nəticələri</h3>
                        <button className="btn-secondary">
                            Hamısını gör
                        </button>
                    </div>
                    
                    <div className="test-results-list">
                        <div className="test-result-item">
                            <div className="test-info">
                                <h4>Ayşə Məmmədova</h4>
                                <p>Beck Depresiya İnventarı</p>
                                <span className="test-date">Bugün, 14:30</span>
                            </div>
                            <div className="test-score high">
                                <span className="score-value">24</span>
                                <span className="score-level">Yüksək</span>
                            </div>
                        </div>

                        <div className="test-result-item">
                            <div className="test-info">
                                <h4>Ramil Hüseynov</h4>
                                <p>Hamilton Anksiyete Şkalası</p>
                                <span className="test-date">Dünən, 16:15</span>
                            </div>
                            <div className="test-score medium">
                                <span className="score-value">18</span>
                                <span className="score-level">Orta</span>
                            </div>
                        </div>

                        <div className="test-result-item">
                            <div className="test-info">
                                <h4>Leyla Əhmədova</h4>
                                <p>Stress Qiymətləndirməsi</p>
                                <span className="test-date">2 gün əvvəl</span>
                            </div>
                            <div className="test-score low">
                                <span className="score-value">8</span>
                                <span className="score-level">Aşağı</span>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default DDtestResults