import React from "react";
import {useSelector} from "react-redux";
import {RootStateType} from "../../bll/store";

export const Profile = () => {
    // const isLoggedIn = useSelector<AppRootStoreType, boolean>(state => state.logIn.isLoggedIn)
    // if (!isLoggedIn) {
    //     return <Redirect to={'/login'}/>
    // }
    // return <div>Profile</div>;

    const isLoggedIn = useSelector<RootStateType>(state => state.login.isLoggedIn)
    const userName = useSelector<RootStateType>(state => state.login.userName)



    if (isLoggedIn == true) {
        return <div>Profile

        </div>
    }


return (
    <div>
        <div>profile</div>
        {userName}
    </div>
)

};