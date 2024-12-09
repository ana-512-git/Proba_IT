import React from "react";
import "./Login.css"

function Login(){
    return (
      <>
    <div className="login-container">
      <div className="login-box">
        <h2>Logheaza-te, chioraie matele!</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Log in
          </button>
          <a href="/forgot-password" className="forgot-password">
            Forgot password?
          </a>
        </form>
      </div>
      
    </div>
    </>
    );
}

export default Login