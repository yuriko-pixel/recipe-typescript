import { useEffect } from 'react';
import {useQuery} from 'react-query'
import { resourceLimits } from 'worker_threads';
import {FlexWrapper} from '../App.styles'
import RecipeCard from './components/RecipeCard'

// const authKey = process.env.REACT_APP_RECIPEAUTH;

const authKey = '29ae257991b64dc59a16ff38e2c04708';

export type Recipe = {
    id: number,
    title: string,
    image: string
}

export const getRandomRecipe = async (): Promise<Recipe[]> => {
    const data = await (await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${authKey}`)).json();
    return data.results.map((recipe: Recipe) => ({
        ...recipe
    }))
}

const RandomRecipe = () => {
    useEffect(() => {
        const item = getRandomRecipe();
        console.log(item);
    },[])
    return (
        <FlexWrapper>
        {recipe.map(recipe => <RecipeCard src={recipe.image} recipe={recipe} />)}
        </FlexWrapper>
    )
}

export default RandomRecipe