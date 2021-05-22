import {useQuery} from 'react-query'

const authKey = process.env.REACT_APP_RECIPEAUTH;

type Recipe = {
    id: number,
    title: string,
    sourceUrl: string,
    image: string,
    summary: string,
    analyzedInstructions: [
        steps: [
            id: number,
            step: string
        ]
    ]
}

const getRandomRecipe = async (): Promise<Recipe[]> => 
    await(await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${authKey}`)).json();

const RandomRecipe = () => {
    const {data, isLoading, error} = useQuery<Recipe[]>('recipes', getRandomRecipe);
    console.log(data);
    return (
        <div>
            
        </div>
    )
}

export default RandomRecipe