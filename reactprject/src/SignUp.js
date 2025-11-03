import React, { useState } from "react";
import "./Login.css";

export default function SignUp({ onSignUp, onSwitchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    onSignUp(email, password);
  };
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
      </div>
      <form onSubmit={handleSignUp}>
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
              </tbody>
            </table>
          </div>
        </center>
        <div className="submit-con">
          <button id="signup" type="submit" className="submit">
            Sign Up
          </button>
        </div>
      </form>
      <div className="submit-con">
        <p>Already have an account?</p>
        <button className="submit" onClick={onSwitchToLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
