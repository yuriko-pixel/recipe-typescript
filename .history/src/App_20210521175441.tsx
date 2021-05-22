import React, { useState, useEffect } from 'react';
import {getRandomRecipe, Recipe} from './components/RandomReipe'  
import Navbar from './components/Navbar'
import Top from './components/Top'
import {RecipeCard} from './components/Recipe.style'

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
        <Navbar/>
        <Top/>
        {/* search bar */}
        {/* recipe varieties */}
          {recipe.map(recipe => <RecipeCard img src={recipe.image} />)}
      </div>
      
  );
}

export default App;
