import React from 'react';
import styles from './Menu.module.css';

function Menu() {
  return (
    <div className={styles.menu}>
        <ul className="nav nav-pills justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Reports</a>
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