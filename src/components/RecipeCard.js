import React from "react";
import "./RecipeCard.css";
import { MdOutlineFoodBank } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ title, image, cuisineType, id }) => {
  let navigate = useNavigate();

  const handleClick = (param) => {
    navigate(`/recipeDetails/:${param}`);
  };
  return (
    <div>
      <div className="recipeCard" onClick={(event) => handleClick(id)}>
        <div className="recipeImg">
          <img src={image} />
        </div>

        <div className="recipeDetails">
          <p className="recipeTitle">{title}</p>
          <div className="typeContainer">
            <MdOutlineFoodBank /> <p className="recipetype">{cuisineType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
