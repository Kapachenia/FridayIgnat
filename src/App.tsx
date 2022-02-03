import React, {useEffect} from "react";
import "./App.css";
import {Header} from "./ui/Header/Header";
import {Routes} from "./ui/Routes/Routes";
import styles from "./App.module.css";
import {useDispatch} from "react-redux";
import {authMeTC} from "./bll/loginReducer";

export const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(authMeTC())
    })

    return (
        <div className={styles.AppBlock}>
            <Header />
            <Routes />
        </div>
    );
};
