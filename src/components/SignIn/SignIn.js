import React, {useState} from 'react';
import { Navigate } from "react-router-dom";
import {NavLink} from 'react-router-dom';
import styles from './SignIn.module.css';

const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);


    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/login',{
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {'Content-Type': 'application/json', 'withCredentials': 'true'},
            body: JSON.stringify({
                email,
                password
            })
        })
        .then((response) => {
            if (response.status === 200){
                console.log(response)
                setTimeout(() => {
                    window.location.reload();
                }, 1);
                setRedirect(true)
            }
            else
                window.alert('Login failed: incorrect username or password')
        })
        
    }
    
    if(redirect){
        return <Navigate to="/"></Navigate>
    }


    return (
        <div className={`${styles.container} `}>
            <h1>FlowMeter</h1>
            <p>An application that allows you to integrate the device with a database and easily manage the measurements</p>
            <form onSubmit={submit}>            
                <h2 className="h3 mb-3 fw-normal">Please sign in</h2>

                <input id={`${styles.input}`} type="email" className="form-control" placeholder="name@example.com"
                    onChange={e => setEmail(e.target.value)}
                />
                <input id={`${styles.input}`} type="password" className="form-control" placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

                <NavLink to="/register" className="nav-link">Do not have an account?</NavLink>
            </form>        
        </div>

            );
        }

export default SignIn;