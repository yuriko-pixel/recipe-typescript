import { useEffect, useState } from 'react';
import {FlexWrapper} from '../App.styles'
import RecipeCard from './RecipeCard'

// const authKey = process.env.REACT_APP_RECIPEAUTH;

const authKey = '29ae257991b64dc59a16ff38e2c04708';

export type Recipe = {
    id: number,
    title: string,
    image: string
}
const url = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2'
// https://api.spoonacular.com/recipes/complexSearch?apiKey=
export const getRandomRecipe = async (): Promise<Recipe[]> => {
    const data = await (await fetch(`${url}?apiKey=${authKey}`)).json();
    return data.results.map((recipe: Recipe) => ({
        ...recipe
    }))
}

const RandomRecipe = () => {
    const [recipe, setRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
        // const data = async() => {
        //     const recipes = await getRandomRecipe();
        //     setRecipes(recipes);
        //   };
        //   data();
    },[])

    return (
        <FlexWrapper>
            {recipe.map(menu => <RecipeCard src={menu.image} recipe={menu} />)}
        </FlexWrapper>
    )
}

export default RandomRecipe