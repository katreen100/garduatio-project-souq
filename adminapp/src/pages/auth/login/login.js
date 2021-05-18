import React from 'react'

const Login = (props) => {
    const { email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        emailError,
        passwordError } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Email Address</label>
                <input type="text" autoFocus required value={email}
                    onChange={((e) => setEmail(e.target.value))} />
                <p className="errorMsg"> {emailError} </p>


                <label>Password</label>
                <input type="password" required value={password}
                    onChange={((e) => setPassword(e.target.value))} />
                <p className="errorMsg"> {passwordError} </p>

                <div className="btnContainer">
                    {<button className="btnContainer" onClick={handleLogin}>Sign In</button>}
                </div>

            </div>
        </section>
    )
}
export default Login;

// email : admin1234@gmail.com
// pass : ITIGroupOne@12345