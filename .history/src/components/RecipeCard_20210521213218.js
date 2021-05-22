import {Recipe} from './RandomReipe'
import { RecipeImage,flexWrapper,RecipeTitle } from './RecipeCard.styles'

const RecipeCard = (recipe) => {
    console.log(recipe.recipe)
    return (
        <flexWrapper>
            <RecipeImage src={recipe.recipe.image} />
            <RecipeTitle />
        </flexWrapper>
    )
}
export default RecipeCard