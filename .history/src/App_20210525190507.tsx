import React, { useState } from 'react';
import RandomRecipe from './components/RandomRecipe'  
import Navbar from './components/Navbar'
import Top from './components/Top'
import {Wrapper} from './components/Recipe.style'
import {AppStyles,RecipeWrapper,Searchbar,Searchimg,SearchWrapper,AddIngreButton,IngredientsSearch} from './App.styles'
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
    window.location.href += "searchrecipe/" + search.trim();
  }

  const ingredientsButton = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {

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
          <AddIngreButton onClick={ingredientsButton}>+ Add ingredients keywords</AddIngreButton>
          <IngredientsSearch type="text" placeholder="Type ingredients..." value={search} onChange={getSearch}/>
        </SearchWrapper>
        {/* recipe varieties */}
          <RecipeWrapper>
            <RandomRecipe/>
          </RecipeWrapper>
          </Wrapper>
      </AppStyles>
      <Route exact path='/searchrecipe/:cusine' />
      </BrowserRouter>
  );
}

export default App;
