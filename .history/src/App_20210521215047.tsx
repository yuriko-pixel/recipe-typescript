import React, { useState, useEffect } from 'react';
import {getRandomRecipe, Recipe} from './components/RandomReipe'  
import Navbar from './components/Navbar'
import Top from './components/Top'
import {Wrapper} from './components/Recipe.style'
import RecipeCard from './components/RecipeCard'
import {App} from './App.styles'

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
      <App className="App">
        <Navbar/>
        <Wrapper>
        <Top/>
        {/* search bar */}
        {/* recipe varieties */}
          {recipe.map(recipe => <RecipeCard src={recipe.image} recipe={recipe} />)}
          </Wrapper>
      </App>
      
  );
}

export default App;
