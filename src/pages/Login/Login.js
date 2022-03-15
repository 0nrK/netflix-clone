import React from 'react'
import "./Login.scss"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="login-page">
            <form className="login-form">
                <h3>Sign In</h3>
                <input type="email" placeholder="Email or phone number" />
                <input type="password" placeholder="Password" />
                <Link to="/register">Register now</Link>
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default Login