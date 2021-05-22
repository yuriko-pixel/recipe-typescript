import {Recipe} from './RandomReipe'
import { RecipeImage,flexWrapper,RecipeTitle,CardStyle } from './RecipeCard.styles'

const RecipeCard = (recipe) => {
    console.log(recipe.recipe)
    return (
        <CardStyle>
            <RecipeImage src={recipe.recipe.image} />
            <RecipeTitle>{recipe.recipe.title}</RecipeTitle>
        </CardStyle>
    )
}
export default RecipeCard