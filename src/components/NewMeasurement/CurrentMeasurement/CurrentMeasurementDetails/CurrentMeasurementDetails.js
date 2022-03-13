import styles from './CurrentMeasurementDetails.module.css'

function CurrentMeasurementDetails(props) {

    let averageFlows = props.survey.measurements.map(el => el.averageFlow);
    let len = averageFlows.length;
    let flows = props.survey.measurements.map(el => el.currentFlow);
    let temperatures = props.survey.measurements.map(el => el.temperature);
    let pressures = props.survey.measurements.map(el => el.pressure);

    return(
        <div>
            {len > 0 ? 
            <div className="d-flex justify-content-center">
            <div className={` ${styles.position} card `} >
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Current flow: {flows[len-1]} m&#179;/s</li>
                <li className="list-group-item">Average flow: <b>{(averageFlows[len-1])} m&#179;/s</b></li>
                <li className="list-group-item">Pressure: {pressures[len-1]} hPa</li>
                <li className="list-group-item">Temperature: {temperatures[len-1]} &#176;C</li>
                </ul>
            </div>
            </div> : ""}
        </div>
        
        
    )
}

export default CurrentMeasurementDetails;