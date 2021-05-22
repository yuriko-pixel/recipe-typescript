import React, { useState, useEffect } from 'react';
import {getRandomRecipe, Recipe} from './components/RandomReipe'  


function App() {
  const [recipe, setRecipes] = useState<Recipe[]>([]);
  
  useEffect( () => {
    const data = async() => {
      const recipes = await getRandomRecipe();
      setRecipes(recipes);
    };
    data();

  },[])
  return (
      <div className="App">
      </div>
      
  );
}

export default App;
