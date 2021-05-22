const authKey = process.env.REACT_APP_RECIPEAUTH;

const getRecipe = async (): Promise<> => 
    await(await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${authKey}`)).json();