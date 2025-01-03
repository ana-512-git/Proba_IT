import React from "react";
import "./App.css";
import Navbar from "./Navbar";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <header className="hero">
        <img src=''></img>
        {/* temporar ceva ce va fi inlocuit cu o poza */}
        <h1>chef<span className="it">IT</span></h1>
        <div className="hero-illustration"></div>
      </header>

      {/* Top Rated Recipes Section */}
      <section className="top-rated">
        <h2>Top rated recipes</h2>
        <div className="recipes">
          <RecipeCard
            title="Supa la plic"
            rating={5}
            author="Gigel"
            imgSrc="https://via.placeholder.com/150"
            rateCnt={7}
          />
          <RecipeCard
            title="Paine cu pateu"
            rating={5}
            author="Alex"
            imgSrc="https://via.placeholder.com/150"
            rateCnt={4}
          />
          <RecipeCard
            title="Cartofi prajiti"
            rating={4}
            author="Edi"
            imgSrc="https://via.placeholder.com/150"
            rateCnt={2}
          />
        </div>
      </section>

      {/* Contact Us */}
      <h2 className="contact-header">Contact Us</h2>

      <section className="contact">
  <div className="contact-form">
    <div className="contact-personal">
      <input type="text" placeholder="First Name" className="input-field" />
      <input type="text" placeholder="Last Name" className="input-field" />
      <input type="email" placeholder="Email" className="input-field" />
    </div>

    <div className="contact-message">
      <textarea placeholder="Message" className="textarea-field"></textarea>
      <button className="submit-btn">Submit</button>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer>
      <svg width="1920" height="120" viewBox="0 0 1920 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2068.33 210L2017.73 195.809C1967.14 181.617 1865.95 153.234 1764.76 139.043C1663.57 124.851 1562.38 124.851 1461.19 101.199C1360 77.5466 1258.81 30.2418 1157.62 11.3198C1056.43 -7.60209 955.237 1.85887 904.642 6.58935L854.047 11.3198V210H904.642C955.237 210 1056.43 210 1157.62 210C1258.81 210 1360 210 1461.19 210C1562.38 210 1663.57 210 1764.76 210C1865.95 210 1967.14 210 2017.73 210H2068.33Z" fill="#00236D"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M-149 210L-94.5576 195.809C-40.1152 181.617 68.7696 153.234 177.654 139.043C286.539 124.851 395.424 124.851 504.309 101.199C613.194 77.5466 722.078 30.2418 830.963 11.3198C939.848 -7.60209 1048.73 1.85887 1103.18 6.58935L1157.62 11.3198V210H1103.18C1048.73 210 939.848 210 830.963 210C722.078 210 613.194 210 504.309 210C395.424 210 286.539 210 177.654 210C68.7696 210 -40.1152 210 -94.5576 210H-149Z" fill="#00236D"/>
      </svg>
      </footer>
      
    </>
  );
}

function RecipeCard({ title, rating, author, imgSrc, rateCnt}) {
  return (
    <div className="recipe-card">
      <img src={imgSrc} alt={title} className="recipe-image"/>
      <div className="recipe-info">
      <h3 class="recipe-title">{title}</h3>
      <div className="recipe-rating">{Array(rating).fill("⭐")}</div>
      <p className="rate-cnt">Nr rating: {rateCnt}</p>
      <br></br>
      <p class="recipe-author">Autor: {author}</p>
      
      </div>
    </div>
  );
}

export default App;
