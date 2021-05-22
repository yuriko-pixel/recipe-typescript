const authKey = process.env.REACT_APP_RECIPEAUTH;

const getRandomRecipe = async (): Promise<> => 
    await(await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${authKey}`)).json();
