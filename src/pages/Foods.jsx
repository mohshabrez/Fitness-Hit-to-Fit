import { useDispatch, useSelector } from "react-redux"
import { addNewFood, foodInput } from "../redux/actions/foodActions"
import { useEffect } from "react"
import { RESET_FOOD } from "../redux/actionConstants"
import { FoodCard } from "../components/FoodCard"

export const Foods = () => {
    const { _id: userId} = useSelector((state) => state.authState.user)
    const userInput = useSelector((state) => state.foodState.foodInput)
    const foods = useSelector((state) => state.foodState.foods)
    const error = useSelector((state) => state.foodState.foodError)
    const dispatch = useDispatch()

    const handleAddFood = () => {
        dispatch(addNewFood(userInput, userId))
    }

    useEffect(() => {
        return function () {
            dispatch({ type: RESET_FOOD, payload: ""})
        }
    },[])
    
    return(
        <div className="p-4 flex flex-col gap-4 item">
            <h2>Add a new Food Item:</h2>

            <div className="flex gap-2 flex-wrap">
                <label className="flex flex-col">
                    Food Name: 
                    <input
            onChange={(e) =>
              dispatch(
                foodInput({
                  ...userInput,
                  foodName: e.target.value,
                })
              )
            }
            value={userInput.foodName}
            type="text"
            placeholder="enter goal name"
            className="border-2 rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"
          />
                </label>
                <label className="flex flex-col">
          Calories:
          <input
            onChange={(e) =>
              dispatch(
                foodInput({
                  ...userInput,
                  calories: e.target.value,
                })
              )
            }
            value={userInput.calories}
            type="number"
            placeholder="enter calories"
            className="border-2 rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"
          />
        </label>

        <label className="flex flex-col">
          Protein (in grams):
          <input
            onChange={(e) =>
              dispatch(
                foodInput({
                  ...userInput,
                  protein: e.target.value,
                })
              )
            }
            value={userInput.protein}
            type="number"
            placeholder="enter protein"
            className="border-2 rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"
          />
        </label>

        <label className="flex flex-col">
          Carbohydrates (in grams):
          <input
            onChange={(e) =>
              dispatch(
                foodInput({
                  ...userInput,
                  carbohydrates: e.target.value,
                })
              )
            }
            value={userInput.carbohydrates}
            type="number"
            placeholder="enter carbohydrates"
            className="border-2 rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"
          />
        </label>

        <label className="flex flex-col">
          Fat (in grams):
          <input
            onChange={(e) =>
              dispatch(
                foodInput({
                  ...userInput,
                  fat: e.target.value,
                })
              )
            }
            value={userInput.fat}
            type="number"
            placeholder="enter fat"
            className="border-2 rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"
          />
        </label>

        <button
          onClick={handleAddFood}
          className={`text-white  py-0.5 px-4 rounded-md h-max self-end`}
        >
          Add
        </button>
            </div>
            {error && <small className="text-red-600">{`* ${error}`}</small>}

      <h2>All Food Items:</h2>

      <div className="flex flex-wrap gap-4">
        {foods.map((food, i) => {
          return (
            <FoodCard food={food} key={food._id} />
          );
        })}
      </div>
        </div>
    )
}