import { useState } from 'react';
import './style.css'


function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="auth-form login-form active">
              <div className="form-header">
                <h2 className="form-title">Xoş gəldiniz!</h2>
                <p className="form-subtitle">
                  Hesabınıza daxil olun və psixoloji dəstək alın
                </p>
              </div>

              <div className="form-group">
                <label htmlFor="loginEmail" className="form-label">
                  <i className="fas fa-envelope"></i> E-mail ünvanı
                </label>
                <input
                  type="email"
                  id="loginEmail"
                  className="form-input"
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="loginPassword" className="form-label">
                  <i className="fas fa-lock"></i> Şifrə
                </label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="loginPassword"
                    className="form-input"
                    placeholder="Şifrənizi daxil edin"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                <i className="fas fa-sign-in-alt"></i> Giriş et
              </button>

              <div className="social-login">
                <div className="divider">
                  <span>və ya</span>
                </div>
                <div className="social-buttons">
                  <button type="button" className="social-btn google-btn">
                    <i className="fab fa-google"></i> Google ilə daxil ol
                  </button>
                  <button type="button" className="social-btn facebook-btn">
                    <i className="fab fa-facebook-f"></i> Facebook ilə
                  </button>
                </div>
              </div>
            </form>
  )
}

export default Login