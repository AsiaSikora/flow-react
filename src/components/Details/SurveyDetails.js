import {Component} from "react";

function SurveyDetails(props) {
    return(
        <div>
            <p>Survey date: {(props.survey.date).slice(0,10)} at {(props.survey.date).slice(11,16)}</p>
            <p>Device number: {props.survey.device.deviceNumber}</p>
            <p>Localization name: {props.survey.localization.name}</p>
            <p>Average Flow:</p>
            <ul>{props.survey.measurements.map(el => <li>{el.averageFlow}</li>)}</ul>
        </div>
    )

}




export default SurveyDetails;