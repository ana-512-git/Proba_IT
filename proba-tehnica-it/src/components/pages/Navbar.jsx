import "./Navbar.css"
import React from "react"

function Navbar(){
    const loggedIn = false;

    return(
        <nav className="navbar">
        <ul className="navbar-items">
          <li><a href="/" className="navbar-logo">chefIT</a></li>
          <li><a href="/recipes">Recipes</a></li>
          <li><a href="/addrecipe">Add Recipe</a></li>
        </ul>
        <ul className="navbar-items">
        <div>
          {loggedIn ? <ul className="navbar-items"><li><a href="/profile">Profile</a></li></ul> : <ul className="navbar-right"><li className="login-btn"><a href="/login">Login</a></li><li><a href="/register">Register</a></li></ul> }
        </div>
          
        </ul>
      </nav>
    );
}

export default Navbar