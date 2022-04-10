import React from "react";
import styles from "./ReportsDetails.module.css";
import {Link} from "react-router-dom";

function ReportsDetails(props) {
    return (
        <tr className="text-center">
            <th scope="row"><Link to={`/surveys/${props.survey.id}`}>{props.survey.id}</Link></th>
            <td>{(props.survey.date).slice(0, 10)} at {(props.survey.date).slice(11, 16)}</td>
            <td>{props.survey.localization.name}</td>
            <td>{props.survey.localization.gpsCoordinate1}, {props.survey.localization.gpsCoordinate2}</td>
            <td>{props.survey.device.deviceNumber}</td>
        </tr>
    )
}


export default ReportsDetails;