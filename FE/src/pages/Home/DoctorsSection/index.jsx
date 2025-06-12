import "./style.css"

function DoctorsSection() {
  return (
    <section id="doctors" className="doctors">
        <div className="container">
            <div className="section-header">
        <div class="section-badge">👨‍⚕️ Komandamız</div>
                <h2>Təcrübəli Həkimlərimiz</h2>
                <p>Peşəkar psixoloq və psixiatrlarımız</p>
            </div>
            <div className="doctors-filter">
                <button className="filter-btn active" data-filter="all">Hamısı</button>
                <button className="filter-btn" data-filter="psychologist">Psixoloq</button>
                <button className="filter-btn" data-filter="psychiatrist">Psixiatr</button>
                <button className="filter-btn" data-filter="therapist">Terapist</button>
            </div>
            <div className="doctors-grid">
                <div className="doctor-card" data-category="psychologist">
                    <div className="doctor-avatar">
                        <i className="fa-solid fa-user-doctor"></i>
                        <div className="doctor-status online" />
                    </div>
                    <div className="doctor-info">
                        <h3>Dr. Ayşə Məmmədova</h3>
                        <p className="doctor-specialty">Klinik Psixoloq</p>
                        <div className="doctor-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <span>4.9</span>
                        </div>
                        <p className="doctor-experience">8 il təcrübə</p>
                        <div className="doctor-actions">
                            <button className="btn-primary btn-small">Profil</button>
                            <button className="btn-outline btn-small">Chat</button>
                        </div>
                    </div>
                </div>
                <div className="doctor-card" data-category="psychiatrist">
                    <div className="doctor-avatar">
                        <i className="fa-solid fa-user-doctor"></i>
                        <div className="doctor-status offline" />
                    </div>
                    <div className="doctor-info">
                        <h3>Dr. Rəşad Əliyev</h3>
                        <p className="doctor-specialty">Psixiatr</p>
                        <div className="doctor-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <span>4.8</span>
                        </div>
                        <p className="doctor-experience">12 il təcrübə</p>
                        <div className="doctor-actions">
                            <button className="btn-primary btn-small">Profil</button>
                            <button className="btn-outline btn-small">Randevu</button>
                        </div>
                    </div>
                </div>
                <div className="doctor-card" data-category="therapist">
                    <div className="doctor-avatar">
                        <i className="fa-solid fa-user-doctor"></i>
                        <div className="doctor-status online" />
                    </div>
                    <div className="doctor-info">
                        <h3>Dr. Gülnar Həsənova</h3>
                        <p className="doctor-specialty">Ailə Terapisti</p>
                        <div className="doctor-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <span>4.7</span>
                        </div>
                        <p className="doctor-experience">6 il təcrübə</p>
                        <div className="doctor-actions">
                            <button className="btn-primary btn-small">Profil</button>
                            <button className="btn-outline btn-small">Chat</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DoctorsSection