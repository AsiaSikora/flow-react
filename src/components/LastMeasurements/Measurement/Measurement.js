import React from 'react';
import styles from './Measurement.module.css'

function Measurement(props) {
  return (
    <div className={styles.position}>
        <div className="card">
            <div className="card-header">
                {(props.date).slice(0,10)}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.localization.name}</h5>
                <p className="card-text">
                  Device number: {props.device.deviceNumber}
                </p>
                <a href="#" className="btn btn-primary">More</a>
            </div>
        </div>
    </div>
    
  );
}

export default Measurement;