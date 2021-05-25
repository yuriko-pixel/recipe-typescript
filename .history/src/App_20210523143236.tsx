import React, { useState, useEffect } from 'react';
import RandomRecipe, {getRandomRecipe, Recipe} from './components/RandomRecipe'  
import Navbar from './components/Navbar'
import Top from './components/Top'
import {Wrapper} from './components/Recipe.style'
import RecipeCard from './components/RecipeCard'
import {AppStyles,RecipeWrapper,Searchbar,Searchimg,SearchWrapper} from './App.styles'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  const [search, setSearch] = useState('');

  const getSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearch(val);
  }

  const submitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(window.location.href);
    window.location.href += "searchResult/" + search.trim();
    // window.location.href = location.href + "/searchResult/" + search.trim();

  }

  return (
    <BrowserRouter>
      <AppStyles className="App">
        <Navbar/>
        <Wrapper>
        <Top/>
        <SearchWrapper onSubmit={submitSearch}>
          <Searchbar type="text" placeholder="Type cusine name..." value={search} onChange={getSearch}/>
          <button><Searchimg src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" /></button>
        </SearchWrapper>
        {/* recipe varieties */}
          <RecipeWrapper>
            <RandomRecipe/>
          </RecipeWrapper>
          </Wrapper>
      </AppStyles>
      <Route exact path='/searchrecipe/:cusine' component={EachMemo}></Route>
      </BrowserRouter>
  );
}

export default App;
