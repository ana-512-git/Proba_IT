import React from "react";
import "./Register.css"

function Register(){
    return(
        <div className="login-container">
      <div className="login-box">
        <h2>Hai, fa foamea cu noi!</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
                type="name"
                id="name"
                placeholder="Enter your full name"
            />
            </div>
            <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <input
                id="phoneno"
                placeholder="Enter your phone number"
            />
            </div>
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
          <div className="form-group">
            <label htmlFor="password">Confirm password</label>
            <input
              type="password"
              id="password"
              placeholder="Retype your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Register
          </button>
        </form>
      </div>
      
    </div>
    );
}

export default Register