import React, { useState } from "react";
import "./Recipes.css";

function Recipes() {
  const [recipes, setRecipes] = useState([
    { id: 1, title: "Pizza Margherita", author: "John Doe", ratings: 5, image: "pizza.jpg" },
    { id: 2, title: "Spaghetti Carbonara", author: "Jane Smith", ratings: 4, image: "spaghetti.jpg" },
    { id: 3, title: "Tacos", author: "Carlos Diaz", ratings: 5, image: "tacos.jpg" },
    { id: 4, title: "Sushi", author: "Hana Tanaka", ratings: 4, image: "sushi.jpg" },
    { id: 5, title: "Cheesecake", author: "Mary Baker", ratings: 5, image: "cheesecake.jpg" },
    { id: 6, title: "Caesar Salad", author: "Gordon Chef", ratings: 4, image: "salad.jpg" },
  ]);

  return (
    <div className="recipes-page">
      {/* Search and Filter Section */}
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
        />
        <button className="filter-button">Filter</button>
        <button className="sort-button">Sort</button>
      </div>

      {/* Recipes Grid */}
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
                <span className="rating-text">{`${recipe.ratings} stars`}</span>
              </div>
              <p className="recipe-author">Author: {recipe.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
