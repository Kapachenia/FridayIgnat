import {Dispatch} from "redux";
import {loginAPI} from "../api/login-api";

const initState = {
    isLoggedIn: false,
}

type InitStateType = typeof initState

export const loginReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "LOGIN/LOGGED":
            return {...state, isLoggedIn: action.isLoggedIn}
        default:
            return state
    }
}

export const loginAC = (email: string, password: string, rememberMe: string) => {
    return {type: "LOGIN/LOGIN", email, password, rememberMe} as const
}

export const isLoggedInAC = (isLoggedIn: boolean) => {
    return {type: "LOGIN/LOGGED", isLoggedIn} as const
}

type ActionType = ReturnType<typeof loginAC> |
    ReturnType<typeof isLoggedInAC>


export const fetchLoginTC = (email: string, password: string) => {
    return (dispatch: Dispatch<ActionType>) => {
        loginAPI.loginUser(email, password)
            .then(res => {
                if (res.data.token) {
                    dispatch(isLoggedInAC(true))
                }
                console.log(res)
                // debugger

            })
            .catch(err => {
                // debugger
                console.log(err.response.data.error)
            })
    }
}