import React from "react"

function SpecialPoints(props) {
    console.log(props);
    return (
        <div className="container">
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Time</th>
                    <th scope="col">Flow</th>
                    </tr>
                </thead>
                <tbody>
                    {props.survey.measurements
                    .filter(measurement => measurement.isSpecialPoint === true)
                    .map(measurement => 
                    <tr key={measurement.id} {...measurement}>
                        <td>{(measurement.time).slice(0,10)} at {(measurement.time).slice(11,16)}</td>
                        <td>{measurement.currentFlow}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default SpecialPoints;