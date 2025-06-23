import { useState } from "react";
import "./style.css";
import AuthVisual from "./AuthVisual";
import Login from "./Login/index";
import Register from "./Register/index";

function LoginRegister() {
  const [activeForm, setActiveForm] = useState("login");

  return (
    <main className="auth-main">
      <div className="auth-container">
        <AuthVisual />

        <div className="auth-forms">
          <div className="form-toggle">
            <button
              className={`toggle-btn ${activeForm === "login" ? "active" : ""}`}
              onClick={() => setActiveForm("login")}
            >
              <i className="fas fa-sign-in-alt"></i> Giriş
            </button>
            <button
              className={`toggle-btn ${activeForm === "register" ? "active" : ""}`}
              onClick={() => setActiveForm("register")}
            >
              <i className="fas fa-user-plus"></i> Qeydiyyat
            </button>
          </div>

          {activeForm === "login" ? <Login /> : <Register />}
        </div>
      </div>
    </main>
  );
}

export default LoginRegister;
