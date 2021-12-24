import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import useInput from "../../hooks/useInput";
import "./login.css"

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const {login} = useAuth();

    const [errorMessage, setErrorMessage] = useState('')
    const email = useInput('')
    const password = useInput('')

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        login(email.value, password.value, () => navigate(fromPage, {replace: true}), setErrorMessage)

    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-card__logo">
                    <h1 className="login-card__logo-title">SSI</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="login-card__field">
                        <input type="text" name="email" placeholder="Email" {...email} autoComplete="off"/>
                    </div>
                    <div className="login-card__field">
                        <input type="password" name="password" placeholder="Password" {...password}/>
                    </div>
                    <p className="login-card__error-message">{errorMessage}</p>
                    <button type="submit" className="login-card__submit">Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;