import React from "react";
import "./ForgotPassword.css"

function ForgotPassword(){
    return(
        <div className="login-container">
      <div className="login-box">
        <h2>Forgot password</h2>
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
          <button type="submit" className="login-button">
            Send
          </button>
        </form>
      </div>
      
    </div>
    );
}

export default ForgotPassword