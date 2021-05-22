import {Recipe} from './RandomReipe'

const RecipeCard = (recipe) => {
    console.log(recipe.recipe)
    return (
        <div>
            <img src={recipe.image} />
        </div>
    )
}
export default RecipeCard