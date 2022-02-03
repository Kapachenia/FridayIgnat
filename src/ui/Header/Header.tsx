import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Header.module.css";
import {Path} from "../Routes/Routes";
import {useSelector} from "react-redux";
import {RootStateType} from "../../bll/store";

export const Header = () => {

    const isLoggedIn = useSelector<RootStateType>(state => state.login.isLoggedIn)

    return (
        <nav className={classes.nav}>

            {!isLoggedIn && <div className={classes.item}>
                <NavLink to={Path.LogIn} activeClassName={classes.active} >
                    LogIn
                </NavLink>
            </div> }
             {!isLoggedIn && <div className={classes.item}>
                <NavLink to={Path.Registration} activeClassName={classes.active}>
                    Registration
                </NavLink>
            </div>}
            {isLoggedIn && <div className={classes.item}>
                <NavLink to={Path.Profile} activeClassName={classes.active}>
                    Profile
                </NavLink>
            </div>}
            {isLoggedIn && <div className={classes.item}>
                <NavLink to={Path.PacksList} activeClassName={classes.active}>
                    PacksList
                </NavLink>
            </div>}
            {!isLoggedIn && <div className={classes.item}>
                <NavLink to={Path.ResetPassword} activeClassName={classes.active}>
                    Reset password
                </NavLink>
            </div>}
            {!isLoggedIn && <div className={classes.item}>
                <NavLink to={Path.CreateNewPassword} activeClassName={classes.active}>
                    Create new password
                </NavLink>
            </div>
            }
            {/*{<div className={classes.item}>*/}
            {/*    <NavLink to={Path.ForgotPassword} activeClassName={classes.active}>*/}
            {/*        Forgot the Password*/}
            {/*    </NavLink>*/}
            {/*</div>}*/}
        </nav>
    );
};