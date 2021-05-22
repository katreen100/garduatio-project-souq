import React, { useState, useEffect } from 'react';
import { auth } from './../../network/firebase/firebaseConfig';
import './../../App.css';
import Login from './login/login';
import Sucess from './success/success';
import { useFireStoreAdmins } from '../../network/apis/adminAPI';
// import GlobalVarUserRole from '../../network/apis/GlobalVarUserRole'
const LoginPage = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const {Admins} = useFireStoreAdmins()
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
        Admins && Admins.forEach(user => {
            if (user.email === email) {
                console.log('done');
                
                localStorage.setItem('userRole' , user.userRole)
                localStorage.setItem('userId' , user.id)
                localStorage.setItem('profilePicture', user.profilePicture)
                localStorage.setItem('email', user.email)
                // localStorage getItem ()
                console.log(user.userRole)
                auth.signInWithEmailAndPassword(email, password)
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
            }
            else {
                
                setEmailError("Sorry, you are not admin")
                clearErrors();
            }
            
        })
    };

    const handleLogOut = () => {
        auth.signOut();
    }

    const authListener = () => {
        auth.onAuthStateChanged((user) => {
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
        
        
    })
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