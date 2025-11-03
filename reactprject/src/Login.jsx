import React, { useState } from "react";
import "./Login.css";

export default function Login({ onLogin, onSwitchToSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
      </div>
      <form onSubmit={handleLogin}>
        <center>
          <div className="forms">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <div className="col">
                      <input
                        className="input"
                        type="email"
                        placeholder="📧 Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="col">
                      <input
                        className="input"
                        type="password"
                        placeholder="🔒 Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="error"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </center>
        <div className="submit-con">
          <button id="login" type="submit" className="submit">
            Login
          </button>
        </div>
      </form>
      <div className="submit-con">
        <p>Don't have an account?</p>
        <button className="submit" onClick={onSwitchToSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
