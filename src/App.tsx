import React from "react";
import "./App.css";
import {Header} from "./ui/Header/Header";
import {Routes} from "./ui/Routes/Routes";
import styles from "./App.module.css";

export const App = () => {

    return (
        <div className={styles.AppBlock}>
            <Header />
            <Routes />
        </div>
    );
};
