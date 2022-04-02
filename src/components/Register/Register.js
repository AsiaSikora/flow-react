import React, {useState} from 'react';
import { Navigate } from "react-router-dom";
import styles from './Register.module.css';


const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);


    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password
            })
        })
        .then((response) => {
            if (response.status === 201){
                console.log(response)
                setRedirect(true);
            }
            else
                window.alert('Registration failed, please try again.')
        })
        console.log(response)
        
    }

    

    if(redirect){
        return <Navigate to="/signin"></Navigate>
    };
  


    return (
        <div className={`${styles.container} `}>
            <form onSubmit={submit}>
                <h2 className="h3 mb-3 fw-normal">Register</h2>

                <input id={`${styles.input}`} type="firstName" className="form-control" placeholder="First Name"
                    onChange={e => setFirstName(e.target.value)}
                />

                <input id={`${styles.input}`} type="lastName" className="form-control" placeholder="Last Name"
                    onChange={e => setLastName(e.target.value)}
                />

                <input id={`${styles.input}`} type="email" className="form-control" placeholder="name@example.com"
                    onChange={e => setEmail(e.target.value)}
                />

                <input id={`${styles.input}`} type="password" className="form-control" placeholder="Password"
                    onChange={e=> setPassword(e.target.value)}
                />

                {/* <input id="password2" type="password" className="form-control" placeholder="Confirm your password"/> */}


                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
            </form>
        </div>
            );
        }

export default Register;

