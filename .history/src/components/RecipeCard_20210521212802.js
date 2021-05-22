import {Recipe} from './RandomReipe'
import { RecipeCardStyle } from './RecipeCard.styles'

const RecipeCard = (recipe) => {
    console.log(recipe.recipe)
    return (
        <div>
            <RecipeCardStyle src={recipe.recipe.image} />
        </div>
    )
}
export default RecipeCard