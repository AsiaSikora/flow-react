import React, {useState} from 'react';
import { Navigate } from "react-router-dom";
import {NavLink} from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);


    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/login',{
            method: 'POST',
            
            mode: 'cors',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        })

        .then((response) => {
            if (response.status == 200){
                console.log(response)
                setRedirect(true);
            }
            else
                window.alert('Login failed: incorrect username or password')
        })
        


        

    }
    
    if(redirect){
        return <Navigate to="/"></Navigate>
    }


    return (
        <div className= "container-form">
            <h1>FlowMeter</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <form onSubmit={submit}>            
                <h2 className="h3 mb-3 fw-normal">Please sign in</h2>

                <input type="email" className="form-control" placeholder="name@example.com"
                    onChange={e => setEmail(e.target.value)}
                />
                <input type="password" className="form-control" placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

                <NavLink to="/register" className="nav-link">Do not have an account?</NavLink>
            </form>        
        </div>

            );
        }

export default SignIn;