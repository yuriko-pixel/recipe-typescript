import {Recipe} from './RandomReipe'
import { RecipeImage,flexWrapper } from './RecipeCard.styles'

const RecipeCard = (recipe) => {
    console.log(recipe.recipe)
    return (
        <flexWrapper>
            <div>
                <RecipeImage src={recipe.recipe.image} />
                <RecipeTitle></RecipeTitle>
            </div>
        </flexWrapper>
    )
}
export default RecipeCard