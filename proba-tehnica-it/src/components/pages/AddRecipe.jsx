import React from "react";
import "./AddRecipe.css"


function AddRecipe(){
    return(
        <div className="add-recipe-container">
      <div className="add-recipe-box">
        <form>
          <div className="form-group">
            <input
              type="text"
              id="recipe-name"
              placeholder="Recipe name:"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="recipe-description"
              placeholder="Description:"
              required
            />
          </div>
          <div className="upload-photo-button">
            <button className="upload-photo">Upload photo</button>
          </div>
          <button type="submit" className="add-recipe-button">
            Add recipe
          </button>
        </form>
      </div>
      
    </div>
    );
}

export default AddRecipe