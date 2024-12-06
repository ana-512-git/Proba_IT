import React , { useState } from "react";

function Recipes(){
    const [recipes, setRecipes] = useState([
        { id: 1, title: "Reteta 1", author: "Prenume Nume", ratings: 5, image: "pizza.jpg" },
        { id: 2, title: "Reteta 1", author: "Prenume Nume", ratings: 5, image: "pizza.jpg" },
        { id: 3, title: "Reteta 1", author: "Prenume Nume", ratings: 5, image: "pizza.jpg" },
        { id: 4, title: "Reteta 1", author: "Prenume Nume", ratings: 5, image: "pizza.jpg" },
        { id: 5, title: "Reteta 1", author: "Prenume Nume", ratings: 5, image: "pizza.jpg" },
        { id: 6, title: "Reteta 1", author: "Prenume Nume", ratings: 5, image: "pizza.jpg" },
      ]);
    return(
            <div className="recipes-page">
              <div className="search-filter-container">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                />
                <button className="filter-button">Filter</button>
                <button className="sort-button">Sort</button>
              </div>
        
              <div className="recipes-grid">
                {recipes.map((recipe) => (
                  <div key={recipe.id} className="recipe-card">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="recipe-image"
                    />
                    <div className="recipe-details">
                      <h3 className="recipe-title">{recipe.title}</h3>
                      <div className="recipe-ratings">
                        {"⭐".repeat(recipe.ratings)}
                        <span className="rating-text">Nr ratinguri</span>
                      </div>
                      <p className="recipe-author">Author: {recipe.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
    );
}

export default Recipes