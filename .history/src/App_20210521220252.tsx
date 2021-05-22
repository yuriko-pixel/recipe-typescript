import React, { useState, useEffect } from 'react';
import {getRandomRecipe, Recipe} from './components/RandomReipe'  
import Navbar from './components/Navbar'
import Top from './components/Top'
import {Wrapper} from './components/Recipe.style'
import RecipeCard from './components/RecipeCard'
import {AppStyles,RecipeWrapper} from './App.styles'

function App() {
  return (
      <AppStyles className="App">
        <Navbar/>
        <Wrapper>
        <Top/>
        {/* search bar */}
        {/* recipe varieties */}
          <RecipeWrapper>

          </RecipeWrapper>
          </Wrapper>
      </AppStyles>
      
  );
}

export default App;
