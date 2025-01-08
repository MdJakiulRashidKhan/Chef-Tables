import React from "react";
import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe, addRecipeItem }) => {
  const {
    recipe_id,
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="card bg-base-100  border-2">
      <figure className="px-8 pt-6">
        <img
          className="w-full md:h-52 rounded-full"
          src={recipe_image}
          alt={recipe_name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-titles text-lg text-gray-800 font-semibold">
          {recipe_name}
        </h2>
        <p className="text-gray-600 text-base">{short_description}</p>
        <h3 className="text-lg text-gray-800 font-medium">
          Ingredients: {recipe.ingredients.length}
        </h3>
        <ul className="ml-8">
          {ingredients.map((ingredient, index) => (
            <li className="list-disc text-gray-600 " key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <CiClock2 className="text-xl" />
            <p>{preparing_time} min</p>
          </div>
          <div className="flex items-center gap-2">
            <FaFire className="text-xl" />
            <p>{calories} calories</p>
          </div>
        </div>
        <div className="card-actions ">
          <button
            onClick={() => addRecipeItem(recipe)}
            className="btn bg-green-400 hover:bg-green-500 rounded-full px-8 font-medium"
          >
            Add to Cooking List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
