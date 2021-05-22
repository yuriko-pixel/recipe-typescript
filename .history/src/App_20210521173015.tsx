import React, { useState } from 'react';
import {getRandomRecipe} from './components/RandomReipe'
  
function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const recipes = await getRandomRecipe();
    setRecipes(recipes);
  },[])
  return (
      <div className="App">
      </div>
      
  );
}

export default App;
