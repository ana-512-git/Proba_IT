import React from "react";
import "./App.css";
import Navbar from "./components/pages/Navbar";

import Homepage from "./components/pages/Homepage";
import Login from "./components/pages/Login";
import AddRecipe from "./components/pages/AddRecipe";
import Profile from "./components/pages/Profile";
import Recipes from "./components/pages/Recipes";
import Register from "./components/pages/Register";
import ForgotPassword from "./components/pages/ForgotPassword";

function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component = <Homepage/>
      break
    case "/register":
      Component = <Register/>
      break
    case "/login":
      Component = <Login/>
      break
    case "/addrecipe":
      Component = <AddRecipe/>
      break
    case "/profile":
      Component = <Profile/>
      break
    case "/recipes":
      Component = <Recipes/>
      break
    case "/forgotpassword":
      Component = <ForgotPassword/>
  }
  return (
    <div>
      <Navbar/>
      {Component}
    </div>
  );
}



export default App;
