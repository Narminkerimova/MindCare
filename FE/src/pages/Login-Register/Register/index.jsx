import { useState } from 'react';
import './style.css';

function Register() {
  const [showPasswords, setShowPasswords] = useState({
    registerPassword: false,
    confirmPassword: false,
  });

  const togglePassword = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <form className="auth-form register-form active">
      <div className="form-header">
        <h2 className="form-title">Qeydiyyatdan keç</h2>
        <p className="form-subtitle">
          Pulsuz hesab yaradın və dəstək almağa başlayın
        </p>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            <i className="fas fa-user"></i> Ad
          </label>
          <input
            type="text"
            id="firstName"
            className="form-input"
            placeholder="Adınız"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">
            <i className="fas fa-user"></i> Soyad
          </label>
          <input
            type="text"
            id="lastName"
            className="form-input"
            placeholder="Soyadınız"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="registerEmail" className="form-label">
          <i className="fas fa-envelope"></i> E-mail ünvanı
        </label>
        <input
          type="email"
          id="registerEmail"
          className="form-input"
          placeholder="example@email.com"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="form-label">
          <i className="fas fa-phone"></i> Telefon nömrəsi
        </label>
        <input
          type="tel"
          id="phone"
          className="form-input"
          placeholder="+994 XX XXX XX XX"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="registerPassword" className="form-label">
          <i className="fas fa-lock"></i> Şifrə
        </label>
        <div className="password-input">
          <input
            type={showPasswords.registerPassword ? "text" : "password"}
            id="registerPassword"
            className="form-input"
            placeholder="Güclü şifrə yaradın"
            required
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => togglePassword("registerPassword")}
          >
            <i className={`fas ${showPasswords.registerPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
          </button>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword" className="form-label">
          <i className="fas fa-lock"></i> Şifrəni təsdiqlə
        </label>
        <div className="password-input">
          <input
            type={showPasswords.confirmPassword ? "text" : "password"}
            id="confirmPassword"
            className="form-input"
            placeholder="Şifrəni yenidən daxil edin"
            required
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => togglePassword("confirmPassword")}
          >
            <i className={`fas ${showPasswords.confirmPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
          </button>
        </div>
      </div>

      <div className="form-options">
        <label className="checkbox-label">
          <input type="checkbox" id="agreeTerms" required />
          <span className="checkmark"></span>{" "}
          <a href="#" className="terms-link">İstifadə şərtləri</a> və{" "}
          <a href="#" className="terms-link">məxfilik siyasəti</a> ilə razıyam
        </label>
      </div>

      <button type="submit" className="btn btn-primary form-submit">
        <i className="fas fa-user-plus"></i> Qeydiyyatdan keç
      </button>

      <div className="social-login">
        <div className="divider">
          <span>və ya</span>
        </div>
        <div className="social-buttons">
          <button type="button" className="social-btn google-btn">
            <i className="fab fa-google"></i> Google ilə qeydiyyat
          </button>
          <button type="button" className="social-btn facebook-btn">
            <i className="fab fa-facebook-f"></i> Facebook ilə
          </button>
        </div>
      </div>
    </form>
  );
}

export default Register;
