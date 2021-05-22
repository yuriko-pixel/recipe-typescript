import {Recipe} from './RandomReipe'

const RecipeCard = (recipe) => {
    return (
        <div>
            <img src={recipe.img} />
        </div>
    )
}
export default RecipeCard