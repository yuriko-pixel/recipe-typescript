import React, { useState, useEffect } from 'react';
import {getRandomRecipe, Recipe} from './components/RandomReipe'  


function App() {
  const [recipe, setRecipes] = useState<Recipe[]>([]);
  
  useEffect( () => {
    const data = async() => {
      const recipes = await getRandomRecipe();
      setRecipes(recipes);
      console.log(recipes)
    };
    data();

  },[])
  return (
      <div className="App">
        {recipe.map(recipe => <img src={recipe.image} />)}
      </div>
      
  );
}

export default App;
