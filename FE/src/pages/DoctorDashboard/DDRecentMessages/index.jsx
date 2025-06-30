import './style.css'

function DDRecentMessages() {
  return (
                    <div className="dashboard-card messages-card">
                    <div className="card-header">
                        <h3>Son Mesajlar</h3>
                        <button className="btn-secondary">
                            Hamısını gör
                        </button>
                    </div>
                    
                    <div className="messages-list">
                        <div className="message-item unread">
                            <div className="message-avatar">AM</div>
                            <div className="message-content">
                                <div className="message-header">
                                    <h4>Ayşə Məmmədova</h4>
                                    <span className="message-time">10 dəq əvvəl</span>
                                </div>
                                <p>Sabahkı seansımızla bağlı sualım var...</p>
                            </div>
                            <div className="message-status">
                                <span className="unread-badge"></span>
                            </div>
                        </div>

                        <div className="message-item">
                            <div className="message-avatar">RH</div>
                            <div className="message-content">
                                <div className="message-header">
                                    <h4>Ramil Hüseynov</h4>
                                    <span className="message-time">2 saat əvvəl</span>
                                </div>
                                <p>Stress testinin nəticələri necədir?</p>
                            </div>
                        </div>

                        <div className="message-item">
                            <div className="message-avatar">LƏ</div>
                            <div className="message-content">
                                <div className="message-header">
                                    <h4>Leyla Əhmədova</h4>
                                    <span className="message-time">5 saat əvvəl</span>
                                </div>
                                <p>Təşəkkür edirəm, çox kömək etdi.</p>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default DDRecentMessages