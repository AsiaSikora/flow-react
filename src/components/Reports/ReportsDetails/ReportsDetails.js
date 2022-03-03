import React from "react";

import Measurement from "../../LastMeasurements/Measurement/Measurement";
import ReportDetails from "./ReportDetails/ReportDetails";

function ReportsDetails(props) {
    console.log(props.surveys)
    return (
        <div className="container">
        {props.surveys.map(survey => <ReportDetails key={survey.id} {...survey} />)}
        </div>

    )
}

export default ReportsDetails;