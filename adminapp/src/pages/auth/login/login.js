const Login = (props) => {

    const { email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        emailError,
        passwordError
    
    } = props;



    return (

        <section className="login">
            <div className="loginContainer">
                <label>Email Address</label>
                <input type="text" autoFocus required autoComplete="username" value={email}
                    onChange={((e) => setEmail(e.target.value))} />
                <p className="errorMsg"> {emailError} </p>


                <label>Password</label>
                <input type="password" required autoComplete="current-password" value={password}
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

