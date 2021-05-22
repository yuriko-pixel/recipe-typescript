import {Recipe} from './RandomReipe'
import { RecipeImage,flexWrapper,RecipeTitle } from './RecipeCard.styles'

const RecipeCard = (recipe) => {
    console.log(recipe.recipe)
    return (
        <flexWrapper>
            <div>
                <RecipeImage src={recipe.recipe.image} />
                <RecipeTitle />
            </div>
        </flexWrapper>
    )
}
export default RecipeCard