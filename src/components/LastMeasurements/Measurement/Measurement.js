import React from 'react';

function Measurement(props) {
  return (
    <div>
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
        <br/>
    </div>
    
  );
}

export default Measurement;