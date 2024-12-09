import React from "react";
import "./Profile.css"

function Profile(){
    return(
        <div className="profile-container">
      <div className="profile-section">
        <div className="profile-card">
          <div className="profile-icon">
            {/* Replace this with an SVG or image */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              viewBox="0 0 24 24"
              width="50"
              fill="#ffffff"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <p className="profile-name">Gogu bucatar</p>
        </div>
        <div className="info-card">
          <p>
            <strong>E-mail:</strong> <span>gogu@example.com</span>
          </p>
          <p>
            <strong>Telephone:</strong> <span>+123 456 789</span>
          </p>
          <p>
            <strong>College group:</strong> <span>Group 101</span>
          </p>
        </div>
      </div>
      <button className="add-recipe-button">Add a recipe</button>
    </div>
    );
}

export default Profile


