import s from "../Registration/Registration.module.css";
import React, {useState} from "react";
import {fetchLoginTC} from "../../bll/loginReducer";
import {useDispatch} from "react-redux";


export const LogIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(fetchLoginTC(email, password))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <h2 className={s.titleName}>It-incubator</h2>
                <h3 className={s.titleReg}>Sign In</h3>
            </div>
            <div className={s.wrapperForm}>
                <div>
                    <div className={s.wrapperInput}>
                        <label className={s.label}>Email</label>
                        <input type='email' value={email}
                               onChange={(e) => setEmail(e.target.value)}
                            // onFocus={handlerFocus}
                        />
                    </div>
                    <div className={s.wrapperInput}>
                        <label>Password</label>
                        <input type='password' value={password}
                               onChange={(e) => setPassword(e.target.value)}
                            // onFocus={handlerFocus}
                        />
                        {/*<div className={s.error}>*/}
                        {/*    {error}*/}
                        {/*</div>*/}
                    </div>
                    <button onClick={handleSubmit} className={s.buttonReg}>Login</button>
                </div>
                {/*<button onClick={handlerCancel} className={s.buttonCancel} disabled={disabled}>Cancel</button>*/}
            </div>
            {/*{setStatus && <div className={s.preloader}><img alt='loader' src={preloader}/></div>}*/}
        </div>
    )
}