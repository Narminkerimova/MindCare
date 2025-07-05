import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider.jsx";
import "./style.css";

function Login({ onToggleForm }) {
  const { login, error, loading } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterPrompt, setShowRegisterPrompt] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowRegisterPrompt(false); 

    const success = await login(email, password);
    if (success) {
      console.log("Login uğurlu!");
    } else {
      if (error === "User not found. Please register.") {
        setShowRegisterPrompt(true);
      } else {
        setShowRegisterPrompt(false);
      }
    }
  };

  return (
    <form className="auth-form login-form active" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2 className="form-title">Giriş</h2>
        <p className="form-subtitle">
          Daxil olmaq üçün məlumatlarınızı daxil edin
        </p>
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

export default Login;