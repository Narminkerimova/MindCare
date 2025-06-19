import './style.css'

function LoginRegister() {
  return (
    <main className="auth-main">
        <div className="auth-container">
            <div className="auth-visual">
                <div className="visual-content">
                    <div className="visual-icon">
                        <i className="fas fa-brain"></i>
                    </div>
                    <h2 className="visual-title">Zihinsel Sağlamlığınız Bizim Prioritetimiz</h2>
                    <p className="visual-description">
                        Peşəkar psixoloqlar və AI köməkçi ilə dəstəklənən platformamıza xoş gəldiniz. 
                        Stress və depresiyaya qarşı mübarizədə ilk addımınızı atın.
                    </p>
                    
                    <div className="visual-features">
                        <div className="feature-item">
                            <i className="fas fa-shield-alt"></i>
                            <span>Tam məxfilik və təhlükəsizlik</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-clock"></i>
                            <span>24/7 AI dəstək xidməti</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-user-md"></i>
                            <span>50+ sertifikatlı psixoloq</span>
                        </div>
                    </div>
                </div>
                
                <div className="floating-card card-1">
                    <div className="card-icon">
                        <i className="fas fa-heart-pulse"></i>
                    </div>
                    <div className="card-text">
                        <h4>Stress Analizi</h4>
                        <p>Real vaxt monitorinq</p>
                    </div>
                </div>
                
                <div className="floating-card card-2">
                    <div className="card-icon">
                        <i className="fas fa-comments"></i>
                    </div>
                    <div className="card-text">
                        <h4>Canlı Məsləhət</h4>
                        <p>Anında dəstək</p>
                    </div>
                </div>
            </div>

            <div className="auth-forms">
                <div className="form-toggle">
                    <button className="toggle-btn active" data-form="login">
                        <i className="fas fa-sign-in-alt"></i>
                        Giriş
                    </button>
                    <button className="toggle-btn" data-form="register">
                        <i className="fas fa-user-plus"></i>
                        Qeydiyyat
                    </button>
                </div>

                <form className="auth-form login-form active" id="loginForm">
                    <div className="form-header">
                        <h2 className="form-title">Xoş gəldiniz!</h2>
                        <p className="form-subtitle">Hesabınıza daxil olun və psixoloji dəstək alın</p>
                    </div>

                    <div className="form-group">
                        <label for="loginEmail" className="form-label">
                            <i className="fas fa-envelope"></i>
                            E-mail ünvanı
                        </label>
                        <input type="email" id="loginEmail" className="form-input" placeholder="example@email.com" required/>
                        <div className="input-error" id="loginEmailError"></div>
                    </div>

                    <div className="form-group">
                        <label for="loginPassword" className="form-label">
                            <i className="fas fa-lock"></i>
                            Şifrə
                        </label>
                        <div className="password-input">
                            <input type="password" id="loginPassword" className="form-input" placeholder="Şifrənizi daxil edin" required/>
                            <button type="button" className="password-toggle" onclick="togglePassword('loginPassword')">
                                <i className="fas fa-eye"></i>
                            </button>
                        </div>
                        <div className="input-error" id="loginPasswordError"></div>
                    </div>

                    <div className="form-options">
                        <label className="checkbox-label">
                            <input type="checkbox" id="rememberMe"/>
                            <span className="checkmark"></span>
                            Məni yadda saxla
                        </label>
                        <a href="#" className="forgot-link">Şifrəni unutmusan?</a>
                    </div>

                    <button type="submit" className="btn btn-primary form-submit">
                        <i className="fas fa-sign-in-alt"></i>
                        Giriş et
                    </button>

                    <div className="social-login">
                        <div className="divider">
                            <span>və ya</span>
                        </div>
                        <div className="social-buttons">
                            <button type="button" className="social-btn google-btn">
                                <i className="fab fa-google"></i>
                                Google ilə daxil ol
                            </button>
                            <button type="button" className="social-btn facebook-btn">
                                <i className="fab fa-facebook-f"></i>
                                Facebook ilə
                            </button>
                        </div>
                    </div>
                </form>

                <form className="auth-form register-form" id="registerForm">
                    <div className="form-header">
                        <h2 className="form-title">Qeydiyyatdan keç</h2>
                        <p className="form-subtitle">Pulsuz hesab yaradın və dəstək almağa başlayın</p>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label for="firstName" className="form-label">
                                <i className="fas fa-user"></i>
                                Ad
                            </label>
                            <input type="text" id="firstName" className="form-input" placeholder="Adınız" required/>
                            <div className="input-error" id="firstNameError"></div>
                        </div>
                        <div className="form-group">
                            <label for="lastName" className="form-label">
                                <i className="fas fa-user"></i>
                                Soyad
                            </label>
                            <input type="text" id="lastName" className="form-input" placeholder="Soyadınız" required/>
                            <div className="input-error" id="lastNameError"></div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label for="registerEmail" className="form-label">
                            <i className="fas fa-envelope"></i>
                            E-mail ünvanı
                        </label>
                        <input type="email" id="registerEmail" className="form-input" placeholder="example@email.com" required/>
                        <div className="input-error" id="registerEmailError"></div>
                    </div>

                    <div className="form-group">
                        <label for="phone" className="form-label">
                            <i className="fas fa-phone"></i>
                            Telefon nömrəsi
                        </label>
                        <input type="tel" id="phone" className="form-input" placeholder="+994 XX XXX XX XX" required/>
                        <div className="input-error" id="phoneError"></div>
                    </div>

                    <div className="form-group">
                        <label for="registerPassword" className="form-label">
                            <i className="fas fa-lock"></i>
                            Şifrə
                        </label>
                        <div className="password-input">
                            <input type="password" id="registerPassword" className="form-input" placeholder="Güclü şifrə yaradın" required/>
                            <button type="button" className="password-toggle" onclick="togglePassword('registerPassword')">
                                <i className="fas fa-eye"></i>
                            </button>
                        </div>
                        <div className="password-strength" id="passwordStrength"></div>
                        <div className="input-error" id="registerPasswordError"></div>
                    </div>

                    <div className="form-group">
                        <label for="confirmPassword" className="form-label">
                            <i className="fas fa-lock"></i>
                            Şifrəni təsdiqlə
                        </label>
                        <div className="password-input">
                            <input type="password" id="confirmPassword" className="form-input" placeholder="Şifrəni yenidən daxil edin" required/>
                            <button type="button" className="password-toggle" onclick="togglePassword('confirmPassword')">
                                <i className="fas fa-eye"></i>
                            </button>
                        </div>
                        <div className="input-error" id="confirmPasswordError"></div>
                    </div>

                    <div className="form-options">
                        <label className="checkbox-label">
                            <input type="checkbox" id="agreeTerms" required/>
                            <span className="checkmark"></span>
                            <a href="#" className="terms-link">İstifadə şərtləri</a> və <a href="#" className="terms-link">məxfilik siyasəti</a> ilə razıyam
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary form-submit">
                        <i className="fas fa-user-plus"></i>
                        Qeydiyyatdan keç
                    </button>

                    <div className="social-login">
                        <div className="divider">
                            <span>və ya</span>
                        </div>
                        <div className="social-buttons">
                            <button type="button" className="social-btn google-btn">
                                <i className="fab fa-google"></i>
                                Google ilə qeydiyyat
                            </button>
                            <button type="button" className="social-btn facebook-btn">
                                <i className="fab fa-facebook-f"></i>
                                Facebook ilə
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>
  )
}

export default LoginRegister