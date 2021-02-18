import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";

function Login() {
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                alert(error.message)
            });
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i.pcmag.com/imagery/reviews/07td46ju7p6lLVb0QGwc5VF-6..v_1569479844.jpg" alt=""/>
                <h1>Sign In to Slack-Clone</h1>
                <p>Final Project</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    );
}

export default Login;