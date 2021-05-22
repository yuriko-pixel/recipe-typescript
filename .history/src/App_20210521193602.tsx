import React, { useState, useEffect } from 'react';
import {getRandomRecipe, Recipe} from './components/RandomReipe'  
import Navbar from './components/Navbar'
import Top from './components/Top'
import {Wrapper} from './components/Recipe.style'
import RecipeCard from './components/RecipeCard'

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
        <Wrapper>
        <Top/>
        {/* search bar */}
        {/* recipe varieties */}
          {recipe.map(recipe => <RecipeCard src={recipe.image} recipe={recipe} />)}
          </Wrapper>
      </div>
      
  );
}

export default App;
