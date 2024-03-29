import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {registrationReducer} from "./registrationReducer";
import {profileReducer} from "./profileReducer";
import {resetPasswordReducer} from "./resetPasswordReducer";
import {createNewPasswordReducer} from "./createNewPasswordReducer";
import {error404Reducer} from "./error404Reducer";
import {forgotReducer} from './forgotReducer';
import {packsReducer} from "./packsReducer";
import {paginationFindReducer} from "./paginationFindReducer";

export type RootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    registration: registrationReducer,
    profile: profileReducer,
    resetPassword: resetPasswordReducer,
    createNewPassword: createNewPasswordReducer,
    error404: error404Reducer,
    forgot: forgotReducer,
    paginationFind: paginationFindReducer,
    cards: packsReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));


export type AppRootStoreType = ReturnType<typeof rootReducer> // Добавил

// @ts-ignore
window.store = store; // for dev