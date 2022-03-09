import React from 'react';
import styles from './Measurement.module.css'
import { useNavigate } from "react-router-dom";

function Measurement(props) {

  let navigate = useNavigate();

  return (
    <div className={styles.position}>
        <div className="card">
            <div className="card-header">
                {(props.date).slice(0,10)}
            </div>
            <div className="card-body">
                <h5 className="card-title">Place: {props.localization.name}</h5>
                <p className="card-text">
                  Device number: {props.device.deviceNumber}
                </p>
                <button 
                onClick={async () => {
                    navigate(`/surveys/${props.id}`)}} 
                className="btn btn-primary">
                More</button>
            </div>
        </div>
    </div>
    
  );
}

export default Measurement;