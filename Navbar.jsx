/*import { Link } from "react-router-dom";*/

function Navbar(){
    const loggedIn = false;

    return(
        <nav className="navbar">
        <div className="navbar-logo">chef <span className="it">IT</span></div>

        <ul className="navbar-left">
          <li><a href="/recipes">Recipes</a></li>
          <li><a href="/addrecipe">Add Recipe</a></li>
        </ul>
        <ul className="navbar-right">
        <div>
          {loggedIn ? <ul className="navbar-right"><li><a href="/profile">Profile</a></li></ul> : <ul className="navbar-right"><li className="login-btn"><a href="/login">Login</a></li><li><a href="/register">Register</a></li></ul> }
        </div>
          
        </ul>
      </nav>
    );
}

export default Navbar