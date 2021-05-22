import {useQuery} from 'react-query'

// const authKey = process.env.REACT_APP_RECIPEAUTH;

const authKey = '29ae257991b64dc59a16ff38e2c04708';

type Recipe = {
    results: [
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
    ]
}

const getRandomRecipe = async (): Promise<Recipe[]> => 
    await(await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${authKey}`)).json();

const RandomRecipe = () => {
    const {data, isSuccess, isLoading, error} = useQuery<Recipe[]>('recipes', getRandomRecipe);
    console.log(data.results);
    return (
        <div>
            {isSuccess === true ? data?.results.map(recipe => <img src={recipe.image} />): <div>Loading...</div>}
        </div>
    )
}

export default RandomRecipe