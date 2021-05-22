import { useEffect, useState } from 'react';
import {FlexWrapper} from '../App.styles'
import RecipeCard from './RecipeCard'

const authKey = process.env.REACT_APP_RECIPEAUTH;

export type Recipe = {
    id: number,
    title: string,
    image: string
}

export type DetailRecipe = {
    id: number,
    title: string,
    image: string,
    readyInMinutes: number,
    aggregateLikes: number, 
    creditsText: string,
    extendedIngredients: [
        name: string,
        amount: number,
        unit: string
    ],
    summary: string
}

export const getRandomRecipe = async (): Promise<Recipe[]> => {
    const data = await (await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${authKey}`)).json();
    return data.results.map((recipe: Recipe) => ({
        ...recipe
    }))
}

export const getRecipeByIngredients = async (ingredients: string): Promise<Recipe[]> => {
    const data = await (await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${authKey}`)).json();
    return data.results.map((recipe: Recipe) => ({
        ...recipe
    }))
}


export const getRecipeById = async (id: number): Promise<DetailRecipe[]> => {
    const data = await (await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${authKey}`)).json();
    return data.results.map((recipe: DetailRecipe) => ({
        ...recipe
    }))
}

const RandomRecipe = () => {
    const [recipe, setRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
        const data = async() => {
            const recipes = await getRandomRecipe();
            setRecipes(recipes);
          };
          data();
    },[])

    return (
        <FlexWrapper>
            {recipe.map(menu => <RecipeCard src={menu.image} recipe={menu} />)}
        </FlexWrapper>
    )
}

export default RandomRecipe