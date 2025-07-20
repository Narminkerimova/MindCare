import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider.jsx";
// import { useNavigate } from "react-router"; // useNavigate'i react-router-dom'dan import edin
import "./style.css";

function Register({ onToggleForm }) { // Prop olaraq onToggleForm-u qəbul edin
  const { register, confirmEmail, error, loading } = useContext(AuthContext);
  // const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmCode, setConfirmCode] = useState("");
  const [step, setStep] = useState(1);
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [localError, setLocalError] = useState(null);

  const validatePassword = (password) => {
    const minLength = 6;

    if (password.length < minLength) {
      return `Şifrə ən azı ${minLength} simvol olmalıdır.`;
    }
    return null;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLocalError(null);

    const passwordError = validatePassword(password);
    if (passwordError) {
      setLocalError(passwordError);
      return;
    }

    const success = await register(username, email, password);
    if (success) {
      setRegisteredEmail(email);
      setStep(2);
    }
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    setLocalError(null);

    const success = await confirmEmail(registeredEmail, confirmCode);
    if (success) {
      console.log("Frontend: Təsdiq uğurlu! Login formuna keçilir.");
      // Məqsəd eyni səhifədə login formuna keçməkdir, yönləndirməyə ehtiyac yoxdur.
      // Sadece onToggleForm funksiyasını çağırırıq.
      if (onToggleForm) {
        onToggleForm('login'); // Login formunu aktivləşdir
      }
      // navigate("/loginregister"); // Bu sətir artıq lazım deyil, çünki state dəyişikliyi ilə form dəyişəcək
    } else {
      console.error("Frontend: Təsdiq uğursuz oldu.");
    }
  };

  if (step === 1) {
    return (
      <form
        className="auth-form register-form active"
        onSubmit={handleRegister}
      >
        <div className="form-header">
          <h2 className="form-title">Qeydiyyatdan keç</h2>
          <p className="form-subtitle">
            Pulsuz hesab yaradın və dəstək almağa başlayın
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="username" className="form-label">
            <i className="fas fa-user"></i> İstifadəçi adı
          </label>
          <input
            type="text"
            id="username"
            className="form-input"
            placeholder="İstifadəçi adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
          <i className="fas fa-user-plus"></i> Qeydiyyatdan keç
        </button>

        {localError && <p className="error-message">{localError}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    );
  }

  return (
    <form className="auth-form confirm-form active" onSubmit={handleConfirm}>
      <div className="form-header">
        <h2 className="form-title">Email Təsdiqi</h2>
        <p className="form-subtitle">
          <strong>{registeredEmail}</strong> ünvanına göndərilən 6 rəqəmli kodu
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

      {localError && <p className="error-message">{localError}</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="form-footer">
        <button type="button" className="back-btn" onClick={() => setStep(1)}>
          <i className="fas fa-arrow-left"></i> Geri qayıt
        </button>
      </div>
    </form>
  );
}

export default Register;
