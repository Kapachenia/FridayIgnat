import React from 'react';
import {NavLink, Redirect} from "react-router-dom";
import classes from "./Header.module.css";
import {Path} from "../Routes/Routes";
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";

export const Header = () => {






    return (
        <nav className={classes.nav}>






             { <div className={classes.item}>
                <NavLink to={Path.Registration} activeClassName={classes.active}>
                    Registration
                </NavLink>
            </div>}
            {  <div className={classes.item}>
                <NavLink to={Path.Profile} activeClassName={classes.active}>
                    Profile
                </NavLink>
            </div>}



            {  <div className={classes.item}>
                <NavLink to={Path.PacksList} activeClassName={classes.active}>
                    PacksList
                </NavLink>
            </div>}



            {  <div className={classes.item}>
                <NavLink to={Path.ResetPassword} activeClassName={classes.active}>
                    Reset password
                </NavLink>
            </div>}
            {  <div className={classes.item}>
                <NavLink to={Path.CreateNewPassword} activeClassName={classes.active}>
                    Create new password
                </NavLink>
            </div>
            }

            <div className={classes.item}>
                <NavLink to={Path.ForgotPassword} activeClassName={classes.active}>
                    Forgot the Password
                </NavLink>
            </div>
        </nav>
    );
};