import Psyc from './../../../assets/freud.jpg'
import './style.css'

function DoctorsCardsSection() {
  return (
     <section class="doctors">
        <div class="doctors-container">
            <div class="doctors-grid">
                
                {/* <!-- Doctor 1 --> */}
                <div class="doctor-card">
                    <div class="doctor-card-body">
                        <div class="doctor-avatar">
                            <img src={Psyc} alt="Dr. Rəna Əliyeva"/>
                        </div>
                        <div class="doctor-info">
                            <h3 class="doctor-name">Dr. Rəna Əliyeva</h3>
                            <div class="doctor-specialty">Klinik Psixoloq</div>
                            <div class="doctor-experience">12 il təcrübə</div>
                            <div class="doctor-rating">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <span class="rating-text">5.0 (124 rəy)</span>
                            </div>
                            <div class="doctor-languages">
                                <span class="language-tag">Azərbaycanca</span>
                                <span class="language-tag">English</span>
                            </div>
                        </div>
                    </div>
                    <div class="doctor-card-footer">
                        <div class="doctor-actions">
                            <button class="btn btn-outline btn-small">
                                <i class="fas fa-eye"></i>
                                Profil
                            </button>
                            <button class="btn btn-primary btn-small">
                                <i class="fas fa-calendar-plus"></i>
                                Randevu
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Doctor 2 --> */}
                <div class="doctor-card">
                    <div class="doctor-card-body">
                        <div class="doctor-avatar">
                            <img src={Psyc} alt="Dr. Elvin Quliyev"/>
                        </div>
                        <div class="doctor-info">
                            <h3 class="doctor-name">Dr. Elvin Quliyev</h3>
                            <div class="doctor-specialty">Uşaq Psixoloqu</div>
                            <div class="doctor-experience">8 il təcrübə</div>
                            <div class="doctor-rating">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <span class="rating-text">4.9 (87 rəy)</span>
                            </div>
                            <div class="doctor-languages">
                                <span class="language-tag">Azərbaycanca</span>
                                <span class="language-tag">Türkçe</span>
                            </div>
                        </div>
                    </div>
                    <div class="doctor-card-footer">
                        <div class="doctor-actions">
                            <button class="btn btn-outline btn-small">
                                <i class="fas fa-eye"></i>
                                Profil
                            </button>
                            <button class="btn btn-primary btn-small">
                                <i class="fas fa-calendar-plus"></i>
                                Randevu
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Doctor 3 --> */}
                <div class="doctor-card">
                    <div class="doctor-card-body">
                        <div class="doctor-avatar">
                            <img src={Psyc} alt="Dr. Sona Aslanova"/>
                        </div>
                        <div class="doctor-info">
                            <h3 class="doctor-name">Dr. Sona Aslanova</h3>
                            <div class="doctor-specialty">Psixoterapevt</div>
                            <div class="doctor-experience">15 il təcrübə</div>
                            <div class="doctor-rating">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <span class="rating-text">5.0 (156 rəy)</span>
                            </div>
                            <div class="doctor-languages">
                                <span class="language-tag">Azərbaycanca</span>
                                <span class="language-tag">Русский</span>
                            </div>
                        </div>
                    </div>
                    <div class="doctor-card-footer">
                        <div class="doctor-actions">
                            <button class="btn btn-outline btn-small">
                                <i class="fas fa-eye"></i>
                                Profil
                            </button>
                            <button class="btn btn-primary btn-small">
                                <i class="fas fa-calendar-plus"></i>
                                Randevu
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Doctor 4 --> */}
                <div class="doctor-card">
                    <div class="doctor-card-body">
                        <div class="doctor-avatar">
                            <img src={Psyc} alt="Dr. Məhəmməd Həsənov"/>
                        </div>
                        <div class="doctor-info">
                            <h3 class="doctor-name">Dr. Məmməd Həsənov</h3>
                            <div class="doctor-specialty">Ailə Məsləhətçisi</div>
                            <div class="doctor-experience">10 il təcrübə</div>
                            <div class="doctor-rating">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                                <span class="rating-text">4.7 (93 rəy)</span>
                            </div>
                            <div class="doctor-languages">
                                <span class="language-tag">Azərbaycanca</span>
                                <span class="language-tag">English</span>
                            </div>
                        </div>
                    </div>
                    <div class="doctor-card-footer">
                        <div class="doctor-actions">
                            <button class="btn btn-outline btn-small">
                                <i class="fas fa-eye"></i>
                                Profil
                            </button>
                            <button class="btn btn-primary btn-small">
                                <i class="fas fa-calendar-plus"></i>
                                Randevu
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Doctor 5 --> */}
                <div class="doctor-card">
                    <div class="doctor-card-body">
                        <div class="doctor-avatar">
                            <img src={Psyc} alt="Dr. Leyla Məmmədova"/>
                        </div>
                        <div class="doctor-info">
                            <h3 class="doctor-name">Dr. Leyla Məmmədova</h3>
                            <div class="doctor-specialty">Neyropsikoloq</div>
                            <div class="doctor-experience">7 il təcrübə</div>
                            <div class="doctor-rating">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <span class="rating-text">4.8 (67 rəy)</span>
                            </div>
                            <div class="doctor-languages">
                                <span class="language-tag">Azərbaycanca</span>
                                <span class="language-tag">Deutsch</span>
                            </div>
                        </div>
                    </div>
                    <div class="doctor-card-footer">
                        <div class="doctor-actions">
                            <button class="btn btn-outline btn-small">
                                <i class="fas fa-eye"></i>
                                Profil
                            </button>
                            <button class="btn btn-primary btn-small">
                                <i class="fas fa-calendar-plus"></i>
                                Randevu
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Doctor 6 --> */}
                <div class="doctor-card">
                    <div class="doctor-card-body">
                        <div class="doctor-avatar">
                            <img src={Psyc} alt="Dr. Kamran Əliyev"/>
                        </div>
                        <div class="doctor-info">
                            <h3 class="doctor-name">Dr. Kamran Əliyev</h3>
                            <div class="doctor-specialty">Klinik Psixoloq</div>
                            <div class="doctor-experience">14 il təcrübə</div>
                            <div class="doctor-rating">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                                <span class="rating-text">4.6 (112 rəy)</span>
                            </div>
                            <div class="doctor-languages">
                                <span class="language-tag">Azərbaycanca</span>
                                <span class="language-tag">Türkçe</span>
                            </div>
                        </div>
                    </div>
                    <div class="doctor-card-footer">
                        <div class="doctor-actions">
                            <button class="btn btn-outline btn-small">
                                <i class="fas fa-eye"></i>
                                Profil
                            </button>
                            <button class="btn btn-primary btn-small">
                                <i class="fas fa-calendar-plus"></i>
                                Randevu
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

  )
}

export default DoctorsCardsSection