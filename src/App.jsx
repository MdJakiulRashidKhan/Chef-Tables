import React, { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [recipeItems, setRecipeItems] = useState([]);
  const [prepareRecipe, setPrepareRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCal, setTotalCal] = useState(0);

  const addRecipeItem = (recipe) => {
    const isExits = recipeItems.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );
    if (!isExits) {
      setRecipeItems([...recipeItems, recipe]);
    } else {
      alert("Previously Added in Queue");
    }
  };

  const handleRemove = (id) => {
    const deleteRecipe = recipeItems.find((recipe) => recipe.recipe_id === id);

    const updateQueqe = recipeItems.filter((recipe) => recipe.recipe_id !== id);

    setRecipeItems(updateQueqe);
    setPrepareRecipe([...prepareRecipe, deleteRecipe]);
  };

  const calculateTimeAndCalories = (time, cal) => {
    setTotalTime(totalTime + time);
    setTotalCal(totalCal + cal);
  };

  return (
    <div className="container mx-auto">
      <Header />
      <Banner />
      <OurRecipes />
      <section className="flex flex-col md:flex-row gap-6">
        <Recipes addRecipeItem={addRecipeItem} />
        <Sidebar
          handleRemove={handleRemove}
          recipeItems={recipeItems}
          prepareRecipe={prepareRecipe}
          calculateTimeAndCalories={calculateTimeAndCalories}
          totalTime={totalTime}
          totalCal={totalCal}
        />
      </section>
    </div>
  );
};

export default App;
