import {useQuery} from 'react-query'

// const authKey = process.env.REACT_APP_RECIPEAUTH;

const authKey = '29ae257991b64dc59a16ff38e2c04708';

type Recipe = {
    results: [
        id: number,
        title: string,
        image: string
    ]
}

const getRandomRecipe = async (): Promise<Recipe[]> => 
    await(await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${authKey}`)).json();

const RandomRecipe = () => {
    const {data, isSuccess, isLoading, error} = useQuery<Recipe[]>('recipes', getRandomRecipe);
    console.log(data);
    return (
        <div>
            {isSuccess === true ? <div>{data?.results}</div>: <div>Loading...</div>}
        </div>
    )
}

export default RandomRecipe