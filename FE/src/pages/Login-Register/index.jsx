import { useState } from "react";
import AuthVisual from "./AuthVisual";
import Login from "./Login/index";
import Register from "./Register/index";
import "./style.css";

function LoginRegister() {
  const [activeForm, setActiveForm] = useState("login");

  const handleToggleForm = (formType) => {
    setActiveForm(formType);
  };

  return (
    <>
      <title>MindCare: Login-Register</title>
      <main className="auth-main">
        <div className="auth-container">
          <AuthVisual />

          <div className="auth-forms">
            <div className="form-toggle">
              <button
                className={`toggle-btn ${activeForm === "login" ? "active" : ""}`}
                onClick={() => handleToggleForm("login")} 
              >
                <i className="fas fa-sign-in-alt"></i> Giriş
              </button>
              <button
                className={`toggle-btn ${activeForm === "register" ? "active" : ""}`}
                onClick={() => handleToggleForm("register")}
              >
                <i className="fas fa-user-plus"></i> Qeydiyyat
              </button>
            </div>

            {activeForm === "login" ? (
              <Login onToggleForm={handleToggleForm} />
            ) : (
              <Register onToggleForm={handleToggleForm} /> 
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default LoginRegister;
