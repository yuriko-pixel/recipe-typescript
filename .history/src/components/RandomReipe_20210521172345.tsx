import { useEffect } from 'react';
import {useQuery} from 'react-query'
import { resourceLimits } from 'worker_threads';

// const authKey = process.env.REACT_APP_RECIPEAUTH;

const authKey = '29ae257991b64dc59a16ff38e2c04708';

type Recipe = {
    id: number,
    title: string,
    image: string
}

const getRandomRecipe = async (): Promise<Recipe[]> => {
    const data = await (await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${authKey}`)).json();
    return data.results.map((recipe: Recipe) => ({
        ...recipe
    }))
}

const RandomRecipe = () => {
    useEffect(() => {
        getRandomRecipe();
    },[])
    return (
        <div>
            
        </div>
    )
}

export default RandomRecipe