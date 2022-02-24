import React from 'react';
import styles from './Body.module.css';
import ButtonDefault from '../ButtonDefault/ButtonDefault';

function Body() {
  return (
    <div className={`${styles.body} container`}>
      <ButtonDefault title="Start measurement"/>
      <br/><br/>

    </div>
  );
}

export default Body;