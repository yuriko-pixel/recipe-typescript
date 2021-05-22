import {Recipe} from './RandomReipe'

const RecipeCard = ({recipe: Recipe}) => {
    return (
        <div>
            <img src={recipe.img} />
        </div>
    )
}
export default RecipeCard