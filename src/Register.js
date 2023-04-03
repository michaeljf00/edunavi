import React, { useState } from "react";
import { Login } from "./Login";
import "./App.css";

export const Register = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input.email);
    }

    const [input, setInput] = useState({
        email: '',
        name: '',
        pass: '',
        confirmPass: ''
    });
     
    const [error, setError] = useState({
        email: '',
        name: '',
        pass: '',
        confirmPass: ''
    })

    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }))
        validateInput(e);
    }

    const validateInput = (e) => {
        let { name, value } = e.target;
        setError(prev => {
            const state = { ...prev, [name]: ""};

            switch (name) {
                case "name":
                    if (!value) {
                        state["name"] = "Please enter Username.";
                    }
                    break;

                case "email":
                    if (!value) {
                        state["email"] = "Please enter email";
                    }
                    break;

                case "pass":
                    if (!value) {
                        state["pass"] = "Please enter Password.";
                    } else if (input.confirmPass && value !== input.confirmPass) {
                        state["pass"] = "Passwords do not match.";
                    } else {
                        state["pass"] = input.confirmPass ? "" : error.confirmPass;
                    }
                    break;
                
                case "confirmPass":
                    if (!value) {
                        state["confirmPass"] = "Please confirm password.";
                    } else if (input.pass && value !== input.pass) {
                            state["confirmPass"] = "Passwords do not match.";
                    }
                    break;
                default:
                    break;
            }

            return state;
        });
    }

    const [goToLogin, setGoToLogin] = React.useState(false);

    if (goToLogin) {
        return <Login />;
    }

    return (
        <div className="auth-form-container">
            <h1>Join Edu Navi</h1>
            <h1>Let's explore a brighter future!</h1>

        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={input.name} name="name" onChange={onInputChange} onBlur={validateInput} id="name" placeholder="full Name" />
            {error.name && <span className='err'>{error.name}</span>}
            <label htmlFor="email">Email</label>
            <input value={input.email} onChange={onInputChange} onBlur={validateInput} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            {error.email && <span className='err'>{error.email}</span>}
            <label htmlFor="pass">Password</label>
            <input value={input.pass} onChange={onInputChange} onBlur={validateInput} type="pass" placeholder="********" id="pass" name="pass" />
            {error.pass && <span className='err'>{error.pass}</span>}
            <label htmlFor="confirmPass">Confirm Password</label>
            <input value={input.confirmPass} name="confirmPass" onChange={onInputChange} onBlur={validateInput} id="confirmPass" placeholder="********"/>
            {error.confirmPass && <span className='err'>{error.confirmPass}</span>}
            <button onClick={() => { setGoToLogin(true); }} type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => { setGoToLogin(true); }}>Already have an account? Login here.</button>
    </div>
    )
}