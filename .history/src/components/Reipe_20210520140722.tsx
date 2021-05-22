const authKey = process.env.REACT_APP_RECIPEAUTH;

type Recipe = {
    id: number,
    title: string,
    sourceUrl: string,
    image: string,
    summary: string,
    analyzedInstructions: [
        steps: [
            number: number,
            step: string
        ]
    ]
}

const getRandomRecipe = async (): Promise<Recipe[]> => 
    await(await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${authKey}`)).json();

