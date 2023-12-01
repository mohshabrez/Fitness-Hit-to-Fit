import { useDispatch, useSelector } from "react-redux";
import { userSignup, userSignupInput } from "../redux/actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { RESET_SIGNUP } from "../redux/actionConstants";

export const Signup = () => {
    const userInput = useSelector((state) => state.authState.signupInputFields)
    const error = useSelector((state) => state.authState.signupError);
    const isLoggedIn = useSelector((state) => state.authState.isLoggedIn);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(isLoggedIn){
            navigate("/")
        }
        return function (){
            dispatch({ type: RESET_SIGNUP})
        };
    },[isLoggedIn])

    const handleSignup = (e) => {
        e.preventDefault();
        dispatch(userSignup(userInput))
    }

    return(
        <div className="p-4 min-h-[80vh] justify-center items-center">
            <form onSubmit={handleSignup} className="border-gray border-2 flex flex-col gap-2 w-max py-2 px-4 rounded-md">
              <label className="flex flex-col">
                    Email: 
                    <input value={userInput.email} onChange={(e) => dispatch(userSignupInput({...userInput, email: e.target.value}))}
                    type="text" placeholder="enter Email" className="mt-1 border-2 border-gray-300 rounded-md px-2 outline-none focus:border-violet-400"
                    />
                </label>  
                <label className="flex flex-col">
          password:
          <input
            value={userInput.password}
            onChange={(e) =>
              dispatch(
                userSignupInput({ ...userInput, password: e.target.value })
              )
            }
            type="text"
            placeholder="enter password"
            className="mt-1 border-2 border-gray-300 rounded-md px-2 outline-none focus:border-violet-400"
          />
        </label>
        <label className="flex flex-col">
          profile picture url:
          <input
            value={userInput.profilePictureUrl}
            onChange={(e) =>
              dispatch(
                userSignupInput({
                  ...userInput,
                  profilePictureUrl: e.target.value,
                })
              )
            }
            type="text"
            placeholder="enter profile picture url"
            className="mt-1 border-2 border-gray-300 rounded-md px-2 outline-none focus:border-violet-400"
          />
        </label>
        <label className="flex flex-col">
          username:
          <input
            value={userInput.username}
            onChange={(e) =>
              dispatch(
                userSignupInput({ ...userInput, username: e.target.value })
              )
            }
            type="text"
            placeholder="enter username"
            className="mt-1 border-2 border-gray-300 rounded-md px-2 outline-none focus:border-violet-400"
          />
        </label>

        <Link
          to="/login"
          className="mt-1 max-w-max text-blue-600 hover:underline"
        >
          login
        </Link>

        {error && <small className="text-red-600">{`* ${error}`}</small>}

        <button
          type="submit"
          className={`text-blue  p-1 rounded-md mt-2`}
        >
          Signup
        </button>
            </form>

        </div>
    )
}