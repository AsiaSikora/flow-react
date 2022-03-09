import React from 'react';
import styles from './LastMeasurementsHeader.module.css'

function LastMeasurementsHeader() {
  return (
    <div className={`${styles.position} container`}>
      <h4>Last Surveys</h4>
      <hr/>
    </div>
  );
}

export default LastMeasurementsHeader;