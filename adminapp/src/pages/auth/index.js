import React, { useState, useEffect } from 'react';
import {auth as fire} from './../../network/firebase/firebaseConfig';
import './../../App.css';
import Login from './login/login';
import Sucess from './success/success';

const LoginPage = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }
    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }
    const handleLogin = () => {
        clearErrors();
        fire
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/Invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                    default:
                        break;
                }
            });
    };

    const handleLogOut = () => {
        fire.signOut();
    }

    const authListener = () => {
        fire.onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            }
            else {
                setUser('');
            }
        });
    }
    useEffect(() => {
        authListener();
    }, )
    return (
        <div className="App">

            {user ? (<Sucess handleLogOut={handleLogOut} />) :

                (
                    <Login email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleLogin={handleLogin}
                        emailError={emailError}
                        passwordError={passwordError}
                    />
                )}


        </div>
    );
};

export default LoginPage;
