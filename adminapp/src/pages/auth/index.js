import React, { useState, useEffect } from 'react';
import { auth, db } from './../../network/firebase/firebaseConfig';
import './../../App.css';
import Login from './login/login';
import Sucess from './success/success';

const LoginPage = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [userRole, setUserRole] = useState(false)
    const [users, setUsers] = useState([])

    const fetchUsers = () => {
        db.collection("admins")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                setUsers(data);
                console.log(data);
            });
    }
    useEffect(() => {
        fetchUsers();
    }, [])


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
        users && users.forEach(user => {
            if (user.email === email) {
                console.log('done');
                setUserRole(user.userRole);
                console.log(userRole);
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
                clearErrors();
                setEmailError("Sorry, you are not admin")
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
                // console.log(user.uid);

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

            {user ? (<Sucess handleLogOut={handleLogOut} userRole={userRole}/>) :

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