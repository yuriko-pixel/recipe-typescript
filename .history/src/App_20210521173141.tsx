import React, { useState } from 'react';
import {getRandomRecipe, Recipe} from './components/RandomReipe'  


function App() {
  const [recipe, setRecipes] = useState<Recipe[]>([]);
  
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
