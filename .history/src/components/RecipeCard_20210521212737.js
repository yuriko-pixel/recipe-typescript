import {Recipe} from './RandomReipe'
import { RecipeCard } from './RecipeCard.styles'

const RecipeCard = (recipe) => {
    console.log(recipe.recipe)
    return (
        <div>
            <RecipeCard src={recipe.recipe.image} />
        </div>
    )
}
export default RecipeCard