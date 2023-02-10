import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <div className="recipeList">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            cuisineType={recipe.recipe.cuisineType}
            id={recipe.recipe.label}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
