import React from "react";
import "./RecipeDetailsCard.css";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const RecipeDetailsCard = ({}) => {
  return (
    <div className="detailsCard">
      <div className="detailsImg">
        <img src="https://picsum.photos/200/300"></img>
      </div>
      <div className="detailsDesc">
        <h1>Salt and pepper Steak</h1>

        <h4>Ingredients</h4>
        <p>
          2 lbs pork belly 2 tablespoons garlic minced or crushed 5 dried bay
          leaves 4 tablespoons vinegar 1/2 cup soy sauce 1 tablespoon peppercorn
          2 cups water Salt to taste 2 lbs pork belly 2 tablespoons garlic
          minced or crushed 5 dried bay leaves 4 tablespoons vinegar 1/2 cup soy
          sauce 1 tablespoon peppercorn 2 cups water Salt to taste
        </p>
        <button className="button">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper"></div>
          </div>
          <MdOutlineFavoriteBorder /> <span> Favourite </span>
        </button>
      </div>
    </div>
  );
};

export default RecipeDetailsCard;
