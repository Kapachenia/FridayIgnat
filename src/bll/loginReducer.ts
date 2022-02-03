import {Dispatch} from "redux";
import {loginAPI} from "../api/login-api";

const initState = {
    isLoggedIn: false,
    userName: ''
}

type InitStateType = typeof initState

export const loginReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "LOGIN/SET-USER-NAME":
            return {...state, userName: action.name}
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

export const setUserName = (name: string) => {
    return {type: "LOGIN/SET-USER-NAME", name} as const
}

type ActionType = ReturnType<typeof loginAC> |
    ReturnType<typeof isLoggedInAC> |
    ReturnType<typeof setUserName>


export const authMeTC = () => {
    return (dispatch: Dispatch<ActionType>) => {
        // const history = useHistory()
        loginAPI.authMe()
            .then(res => {
                // debugger
                console.log(res.data.name)
                if (res.data.name) {
                    dispatch(isLoggedInAC(true))
                }

                dispatch(setUserName(res.data.name))
            })
            .catch(err => {
                // debugger
                console.log(err.response.status)
                if (err.response.status == 401) {

                    // isLoggedInAC(false)
                    // return <Redirect to={'/profile'} />
                    // history.push("/login")

                }
            })
    }
}

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