import React, { useState, useEffect } from 'react';
import RandomRecipe, {getRandomRecipe, Recipe} from './components/RandomRecipe'  
import Navbar from './components/Navbar'
import Top from './components/Top'
import {Wrapper} from './components/Recipe.style'
import RecipeCard from './components/RecipeCard'
import {AppStyles,RecipeWrapper} from './App.styles'

function App() {
  const [search, setSearch] = useState('');

  const getSearch = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const data = e.target.value;
    setSearch(data);
  }

  return (
      <AppStyles className="App">
        <Navbar/>
        <Wrapper>
        <Top/>
        <form onSubmit={getSearch} className="search-form">
          <input type="text" placeholder="" value={search} />
          <button type="submit" >&#xf002</button>
        </form>
        {/* recipe varieties */}
          <RecipeWrapper>
            <RandomRecipe/>
          </RecipeWrapper>
          </Wrapper>
      </AppStyles>
      
  );
}

export default App;
