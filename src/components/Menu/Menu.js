import React, {useEffect, useState} from 'react';
import styles from './Menu.module.css';
import {NavLink} from 'react-router-dom';

function Menu() {
    const [firstName, setFirstName] = useState ('');

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:5000/api/user', {
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                });

                const content = await response.json();

                setFirstName(content.firstName);
            }
        )();
    },[]);
    

    const logout = async () => {
        await fetch('http://localhost:5000/api/logout',{
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
        });
        // window.location.reload();
        setFirstName('');
    }



    console.log(firstName)
    let nav;

    if(typeof firstName === 'undefined' || firstName === ''){
        nav = (
            <div>
                <ul className="nav nav-pills justify-content-center">
                    <li className="nav-item">
                        <NavLink to="/signin" className="nav-link">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/register" className="nav-link">Register</NavLink>
                    </li>
                </ul>
            </div>
        )
    } else {
        nav =(
            <div>
                 <ul className="nav nav-pills justify-content-center">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/surveys" className="nav-link">Reports</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Localizations</a>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/signin" className="nav-link" onClick={logout}>Logout</NavLink>
                    </li>
                </ul>               
            </div>
        )
    }

return (
    <div className={`sticky-top ${styles.menu}`}>
        {nav}
    </div>
    );
}

export default Menu;