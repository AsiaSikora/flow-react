import React from 'react';
import styles from './Menu.module.css';
import {Link} from 'react-router-dom';

function Menu() {
  return (
    <div className={`sticky-top ${styles.menu}`}>
        <ul className="nav nav-pills justify-content-center">
            <li className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/surveys" className="nav-link">Reports</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Localizations</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">Log out</a>
            </li>
        </ul>
    </div>
  );
}

export default Menu;