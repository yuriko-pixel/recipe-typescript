import {Recipe} from './RandomReipe'
import { RecipeCardStyle,flexWrapper } from './RecipeCard.styles'

const RecipeCard = (recipe) => {
    console.log(recipe.recipe)
    return (
        <flexWrapper>
            <RecipeCardStyle src={recipe.recipe.image} />
        </flexWrapper>
    )
}
export default RecipeCard