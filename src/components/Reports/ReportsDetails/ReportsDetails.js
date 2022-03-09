import React from "react";
import styles from "./ReportsDetails.module.css";
import {Link} from "react-router-dom";

function ReportsDetails(props) {
    return (
        <div className="container">
            <div key={props.survey.id} className={styles.form}>
                <div className="card">
                    <div className="card-header">
                        Survey id: {props.survey.id}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Date: {(props.survey.date).slice(0, 10)} at {(props.survey.date).slice(11, 16)}</h5>
                        <p className="card-text">
                            Place: {props.survey.localization.name}
                            Device number: {props.survey.device.deviceNumber}
                        </p>
                        <Link to={`/surveys/${props.survey.id}`} href="#" className="btn btn-primary">More</Link>
                    </div>
                </div>
            </div>
        </div>)
}


export default ReportsDetails;