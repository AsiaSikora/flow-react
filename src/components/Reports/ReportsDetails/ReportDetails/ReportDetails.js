import React from 'react';
import styles from './ReportDetails.module.css'

function Report(props) {
  return (
    <div className={styles.position}>
        <div className="card">
            <div className="card-header">
                Survey id: {props.id}
            </div>
            <div className="card-body">
                <h5 className="card-title">Date: {(props.date).slice(0,10)} at {(props.date).slice(11,16)}</h5>
                <p className="card-text">
                  Device number: {props.deviceId}
                </p>
                <a href="#" className="btn btn-primary">More</a>
            </div>
        </div>
    </div>

  );
}

export default Report;