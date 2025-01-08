import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = ({ addRecipeItem }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);
  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <Recipe
            recipe={recipe}
            addRecipeItem={addRecipeItem}
            key={recipe.recipe_id}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
