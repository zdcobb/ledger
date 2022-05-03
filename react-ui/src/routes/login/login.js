import React, { useState, useContext } from 'react'
import { UserContext } from '../../components/userContext';

export default function Login () {
    const [ user, setUser ] = useContext(UserContext);
    const [ loginForm, setLoginForm ] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setLoginForm(prevValue => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        setUser({
            username: loginForm.username
        });
    }

    return (
        <section id="login-box">
            <h1>Hello, please log in</h1>
            <form>
                <div>
                    <label htmlFor="input-email">Email </label>
                    <input 
                        id="input-email" 
                        type="text" 
                        name="username" 
                        onChange={handleInputChange}
                        value={loginForm.email}
                    />
                </div>
                <div>
                    <label htmlFor="input-password">Password </label>
                    <input 
                        id="input-password" 
                        name="password" 
                        type="password" 
                        onChange={handleInputChange} 
                        value={loginForm.password}
                    />
                </div>

                <input type="submit" value="log in" onClick={handleSubmit}/>
            </form>
            

            {
                // TODO -- Add password recovery and user registration routes
            /* <div className="helpers-row">
                <a link="/password-recovery">Forgot your passowrd?</a>
                <a link="/new-user">New to ledger?</a>
            </div> */}
        </section>
    )
}