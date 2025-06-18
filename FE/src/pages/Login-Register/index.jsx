import React from 'react'

function LoginRegister() {
  return (
    <main class="auth-main">
        <div class="auth-container">
            <div class="auth-visual">
                <div class="visual-content">
                    <div class="visual-icon">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h2 class="visual-title">Zihinsel Sağlamlığınız Bizim Prioritetimiz</h2>
                    <p class="visual-description">
                        Peşəkar psixoloqlar və AI köməkçi ilə dəstəklənən platformamıza xoş gəldiniz. 
                        Stress və depresiyaya qarşı mübarizədə ilk addımınızı atın.
                    </p>
                    
                    <div class="visual-features">
                        <div class="feature-item">
                            <i class="fas fa-shield-alt"></i>
                            <span>Tam məxfilik və təhlükəsizlik</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-clock"></i>
                            <span>24/7 AI dəstək xidməti</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-user-md"></i>
                            <span>50+ sertifikatlı psixoloq</span>
                        </div>
                    </div>
                </div>
                
                <div class="floating-card card-1">
                    <div class="card-icon">
                        <i class="fas fa-heart-pulse"></i>
                    </div>
                    <div class="card-text">
                        <h4>Stress Analizi</h4>
                        <p>Real vaxt monitorinq</p>
                    </div>
                </div>
                
                <div class="floating-card card-2">
                    <div class="card-icon">
                        <i class="fas fa-comments"></i>
                    </div>
                    <div class="card-text">
                        <h4>Canlı Məsləhət</h4>
                        <p>Anında dəstək</p>
                    </div>
                </div>
            </div>

            <div class="auth-forms">
                <div class="form-toggle">
                    <button class="toggle-btn active" data-form="login">
                        <i class="fas fa-sign-in-alt"></i>
                        Giriş
                    </button>
                    <button class="toggle-btn" data-form="register">
                        <i class="fas fa-user-plus"></i>
                        Qeydiyyat
                    </button>
                </div>

                <form class="auth-form login-form active" id="loginForm">
                    <div class="form-header">
                        <h2 class="form-title">Xoş gəldiniz!</h2>
                        <p class="form-subtitle">Hesabınıza daxil olun və psixoloji dəstək alın</p>
                    </div>

                    <div class="form-group">
                        <label for="loginEmail" class="form-label">
                            <i class="fas fa-envelope"></i>
                            E-mail ünvanı
                        </label>
                        <input type="email" id="loginEmail" class="form-input" placeholder="example@email.com" required/>
                        <div class="input-error" id="loginEmailError"></div>
                    </div>

                    <div class="form-group">
                        <label for="loginPassword" class="form-label">
                            <i class="fas fa-lock"></i>
                            Şifrə
                        </label>
                        <div class="password-input">
                            <input type="password" id="loginPassword" class="form-input" placeholder="Şifrənizi daxil edin" required/>
                            <button type="button" class="password-toggle" onclick="togglePassword('loginPassword')">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                        <div class="input-error" id="loginPasswordError"></div>
                    </div>

                    <div class="form-options">
                        <label class="checkbox-label">
                            <input type="checkbox" id="rememberMe"/>
                            <span class="checkmark"></span>
                            Məni yadda saxla
                        </label>
                        <a href="#" class="forgot-link">Şifrəni unutmusan?</a>
                    </div>

                    <button type="submit" class="btn btn-primary form-submit">
                        <i class="fas fa-sign-in-alt"></i>
                        Giriş et
                    </button>

                    <div class="social-login">
                        <div class="divider">
                            <span>və ya</span>
                        </div>
                        <div class="social-buttons">
                            <button type="button" class="social-btn google-btn">
                                <i class="fab fa-google"></i>
                                Google ilə daxil ol
                            </button>
                            <button type="button" class="social-btn facebook-btn">
                                <i class="fab fa-facebook-f"></i>
                                Facebook ilə
                            </button>
                        </div>
                    </div>
                </form>

                <form class="auth-form register-form" id="registerForm">
                    <div class="form-header">
                        <h2 class="form-title">Qeydiyyatdan keç</h2>
                        <p class="form-subtitle">Pulsuz hesab yaradın və dəstək almağa başlayın</p>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="firstName" class="form-label">
                                <i class="fas fa-user"></i>
                                Ad
                            </label>
                            <input type="text" id="firstName" class="form-input" placeholder="Adınız" required/>
                            <div class="input-error" id="firstNameError"></div>
                        </div>
                        <div class="form-group">
                            <label for="lastName" class="form-label">
                                <i class="fas fa-user"></i>
                                Soyad
                            </label>
                            <input type="text" id="lastName" class="form-input" placeholder="Soyadınız" required/>
                            <div class="input-error" id="lastNameError"></div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="registerEmail" class="form-label">
                            <i class="fas fa-envelope"></i>
                            E-mail ünvanı
                        </label>
                        <input type="email" id="registerEmail" class="form-input" placeholder="example@email.com" required/>
                        <div class="input-error" id="registerEmailError"></div>
                    </div>

                    <div class="form-group">
                        <label for="phone" class="form-label">
                            <i class="fas fa-phone"></i>
                            Telefon nömrəsi
                        </label>
                        <input type="tel" id="phone" class="form-input" placeholder="+994 XX XXX XX XX" required/>
                        <div class="input-error" id="phoneError"></div>
                    </div>

                    <div class="form-group">
                        <label for="registerPassword" class="form-label">
                            <i class="fas fa-lock"></i>
                            Şifrə
                        </label>
                        <div class="password-input">
                            <input type="password" id="registerPassword" class="form-input" placeholder="Güclü şifrə yaradın" required/>
                            <button type="button" class="password-toggle" onclick="togglePassword('registerPassword')">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                        <div class="password-strength" id="passwordStrength"></div>
                        <div class="input-error" id="registerPasswordError"></div>
                    </div>

                    <div class="form-group">
                        <label for="confirmPassword" class="form-label">
                            <i class="fas fa-lock"></i>
                            Şifrəni təsdiqlə
                        </label>
                        <div class="password-input">
                            <input type="password" id="confirmPassword" class="form-input" placeholder="Şifrəni yenidən daxil edin" required/>
                            <button type="button" class="password-toggle" onclick="togglePassword('confirmPassword')">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                        <div class="input-error" id="confirmPasswordError"></div>
                    </div>

                    <div class="form-options">
                        <label class="checkbox-label">
                            <input type="checkbox" id="agreeTerms" required/>
                            <span class="checkmark"></span>
                            <a href="#" class="terms-link">İstifadə şərtləri</a> və <a href="#" class="terms-link">məxfilik siyasəti</a> ilə razıyam
                        </label>
                    </div>

                    <button type="submit" class="btn btn-primary form-submit">
                        <i class="fas fa-user-plus"></i>
                        Qeydiyyatdan keç
                    </button>

                    <div class="social-login">
                        <div class="divider">
                            <span>və ya</span>
                        </div>
                        <div class="social-buttons">
                            <button type="button" class="social-btn google-btn">
                                <i class="fab fa-google"></i>
                                Google ilə qeydiyyat
                            </button>
                            <button type="button" class="social-btn facebook-btn">
                                <i class="fab fa-facebook-f"></i>
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