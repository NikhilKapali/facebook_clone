import { Button } from '@material-ui/core'
import React from 'react'
import './login.css'
import { auth, provider } from "../firebase/firebase"
import { useStateValue } from "./StateProvider"
import {actionTypes} from "./reducer"

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = (e) => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                console.log(result);
            })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="./Facebook-logo.png"
                    alt="logo1"
                />    
                <img
                    src="facebook_type.jpg"
                    alt="logo2"
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
                </Button>
        </div>
    )
}

export default Login
