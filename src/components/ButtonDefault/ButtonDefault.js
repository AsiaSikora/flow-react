import React from 'react';
import styles from './ButtonDefault.module.css';

function ButtonDefault(props) {
  return (
    <div className={`${styles.posit} container`}>
        <button className="btn btn-outline-primary " >{props.title}</button>
    </div>
  );
}

export default ButtonDefault;