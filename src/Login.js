import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Register } from "./Register";
import "./App.css";

import axios from 'axios';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const [goToHome, setGoToHome] = React.useState(false);
    const [goToRegister, setGoToRegister] = React.useState(false);

    function checkLogin() {
        if (email !== '' && pass !== '') {
            const url = 'http://localhost:8000/login/' + email.toString();
            const resp = fetch(url, { method: "get"}).then(res => res.json()).then(data => {
                if (data["response"]["Password"] === pass) { setGoToHome(true); }});
            //assert('http://localhost:8000/login/' + email.toString() === 'http://localhost:8000/login/example@gmail.com')
        }
    }
    
    const assert = function(condition, message) {
        if (!condition)
            throw Error('Assert failed: ' + (message || ''));
    }; 

    if (goToHome) {
        return <Home />;
    } else if (goToRegister) {
        return <Register />;
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button variant="light" onClick={() => { checkLogin(); }} className="login-btn">Log In</button>
            </form>
            <button className="link-btn" onClick={() => { setGoToRegister(true); }}>Don't have an account? Register here.</button>
        </div>
    )
}