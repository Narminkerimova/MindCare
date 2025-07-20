import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../context/AuthProvider.jsx";
import { useNavigate } from "react-router"; 
import "./style.css";

function Login({ onToggleForm }) {
  const { login, confirmEmail, error, loading, user, isAuthenticated } = useContext(AuthContext); 
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterPrompt, setShowRegisterPrompt] = useState(false);
  const [step, setStep] = useState(1);
  const [confirmCode, setConfirmCode] = useState("");
  const [loginAttemptEmail, setLoginAttemptEmail] = useState(""); 

  useEffect(() => {
    if (isAuthenticated && user && user.role) {
      if (user.role === 'admin') {
        navigate('/admin', { replace: true });
      } else if (user.role === 'doctor') {
        navigate('/doctordashboard', { replace: true });
      } else if (user.role === 'user' || user.role === 'patient') {
        navigate('/userdashboard', { replace: true });
      }
    }
  }, [isAuthenticated, user, navigate]);


  const handleLogin = async (e) => {
    e.preventDefault();
    setShowRegisterPrompt(false);

    const success = await login(email, password);
    if (success) {
      console.log("Login uğurlu! Təsdiq kodu emailə göndərildi.");
      setLoginAttemptEmail(email); 
      setStep(2); 
    } else {
      if (error === "User not found. Please register.") {
        setShowRegisterPrompt(true);
      } else {
        setShowRegisterPrompt(false);
      }
    }
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    const success = await confirmEmail(loginAttemptEmail, confirmCode); 
    if (success) {
      console.log("Təsdiq kodu uğurlu! Yönləndirilir...");
    } else {
      console.error("Təsdiq kodu səhvdir.");
    }
  };

  if (step === 1) {
    return (
      <form className="auth-form login-form active" onSubmit={handleLogin}>
        <div className="form-header">
          <h2 className="form-title">Giriş</h2>
          <p className="form-subtitle">Daxil olmaq üçün məlumatlarınızı daxil edin</p>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            <i className="fas fa-envelope"></i> E-mail ünvanı
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            <i className="fas fa-lock"></i> Şifrə
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="Şifrənizi daxil edin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary form-submit"
          disabled={loading}
        >
          <i className="fas fa-sign-in-alt"></i> Daxil ol
        </button>

        {error && <p className="error-message">{error}</p>}

        {showRegisterPrompt && (
          <p className="register-prompt">
            Hesab tapılmadı?{" "}
            <button
              type="button"
              className="register-link-btn"
              onClick={() => onToggleForm("register")}
            >
              Qeydiyyatdan keç
            </button>
          </p>
        )}
      </form>
    );
  }

  return (
    <form className="auth-form confirm-form active" onSubmit={handleConfirm}>
      <div className="form-header">
        <h2 className="form-title">Email Təsdiqi</h2>
        <p className="form-subtitle">
          <strong>{loginAttemptEmail}</strong> ünvanına göndərilən 6 rəqəmli kodu
          daxil edin
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="confirmCode" className="form-label">
          <i className="fas fa-key"></i> Təsdiq kodu
        </label>
        <input
          type="text"
          id="confirmCode"
          className="form-input confirmation-code-input"
          placeholder="123456"
          value={confirmCode}
          onChange={(e) => setConfirmCode(e.target.value)}
          maxLength="6"
          required
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary form-submit"
        disabled={loading}
      >
        <i className="fas fa-check"></i> Təsdiqlə
      </button>

      {error && <p className="error-message">{error}</p>}

      <div className="form-footer">
        <button type="button" className="back-btn" onClick={() => setStep(1)}>
          <i className="fas fa-arrow-left"></i> Geri qayıt
        </button>
      </div>
    </form>
  );
}

export default Login;