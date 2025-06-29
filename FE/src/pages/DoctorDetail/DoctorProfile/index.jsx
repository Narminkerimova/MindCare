import psycholog from '../../../assets/psychololg.jpeg'
import './style.css'

function DoctorProfile() {
  return (
      <div className="doctor-profile-main">
                    <div className="doctor-profile-header">
                        <div className="doctor-avatar-large">
                            <img src={psycholog} alt="Dr. Rəna Əliyeva"/>
                        </div>
                        <div className="doctor-profile-info">
                            <h1 className="doctor-name">Dr. Rəna Əliyeva</h1>
                            <div className="doctor-specialty">Klinik Psixoloq</div>
                            <div className="doctor-credentials">
                                <span className="credential">PhD, Psixologiya</span>
                                <span className="credential">Azərbaycan Psixoloqlar Assosiasiyası üzvü</span>
                            </div>
                            <div className="doctor-rating">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <span className="rating-text">5.0 (124 rəy)</span>
                            </div>
                            <div className="doctor-languages">
                                <span className="language-tag">Azərbaycanca</span>
                                <span className="language-tag">English</span>
                            </div>
                        </div>
                    </div>

                    <div className="doctor-about">
                        <h3 className="section-title">Haqqında</h3>
                        <p className="about-text">
                            12 illik təcrübəyə malik olan Dr. Rəna Əliyeva depressiya, stress idarəetməsi və emosional tənzimləmə sahələrində ixtisaslaşmışdır. Klinik psixologiya sahəsində PhD dərəcəsi olan həkim, Azərbaycan Psixoloqlar Assosiasiyasının aktiv üzvüdür.
                        </p>
                        <p className="about-text">
                            Müasir terapevtik yanaşmalar və elmi əsaslı müalicə metodları ilə müştərilərinə keyfiyyətli xidmət göstərir. Xüsusilə gənclər və yetkinlər arasında emosional çətinliklər yaşayan şəxslərə kömək etmədə böyük təcrübəyə malikdir.
                        </p>
                    </div>

                    <div className="doctor-specializations">
                        <h3 className="section-title">İxtisas sahələri</h3>
                        <div className="specializations-grid">
                            <div className="specialization-item">
                                <i className="fas fa-brain"></i>
                                <span>Depressiya müalicəsi</span>
                            </div>
                            <div className="specialization-item">
                                <i className="fas fa-heart"></i>
                                <span>Stress idarəetməsi</span>
                            </div>
                            <div className="specialization-item">
                                <i className="fas fa-mind"></i>
                                <span>Emosional tənzimləmə</span>
                            </div>
                            <div className="specialization-item">
                                <i className="fas fa-users"></i>
                                <span>Sosial anksiyete</span>
                            </div>
                        </div>
                    </div>

                    <div className="doctor-experience">
                        <h3 className="section-title">Təcrübə</h3>
                        <div className="experience-item">
                            <div className="experience-period">2018 - indiki vaxt</div>
                            <div className="experience-details">
                                <div className="experience-title">Klinik Psixoloq</div>
                                <div className="experience-company">PsyCenter</div>
                            </div>
                        </div>
                        <div className="experience-item">
                            <div className="experience-period">2015 - 2018</div>
                            <div className="experience-details">
                                <div className="experience-title">Psixoloq</div>
                                <div className="experience-company">Bakı Şəhər Klinik Xəstəxanası</div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default DoctorProfile