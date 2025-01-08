import React from "react";

const Sidebar = ({
  recipeItems,
  handleRemove,
  prepareRecipe,
  calculateTimeAndCalories,
  totalCal,
  totalTime,
}) => {
  return (
    <div className="md:w-1/3 border-2 rounded-2xl text-gray-600">
      <h2 className="border-b-2 mx-auto text-center text-gray-800 font-semibold pb-2">
        Want To Cook : {recipeItems.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeItems.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} min</td>
                <td>{recipe.calories} kcal</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemove(recipe.recipe_id);
                      calculateTimeAndCalories(
                        recipe.preparing_time,
                        recipe.calories
                      );
                    }}
                    className="btn bg-green-400 hover:bg-green-500 rounded-full px-4 md:px-8 text-white font-bold"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="border-b-2 mt-4 mx-auto text-center text-gray-800 font-semibold pb-2">
        Currently Cooking : {prepareRecipe.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {prepareRecipe.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} min</td>
                <td>{recipe.calories} kcal</td>
              </tr>
            ))}
            <tr className="border-none">
              <th></th>
              <th></th>
              <th>Total Time = {totalTime}</th>
              <th>Total Calories ={totalCal}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
