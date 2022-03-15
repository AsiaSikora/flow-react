import styles from './CurrentMeasurementDetails.module.css'

function CurrentMeasurementDetails(props) {

    let averageFlows = props.survey.measurements.map(el => el.averageFlow);
    let flows = props.survey.measurements.map(el => el.currentFlow);
    let temperatures = props.survey.measurements.map(el => el.temperature);
    let pressures = props.survey.measurements.map(el => el.pressure);
    let last = averageFlows.length - 1;

    return(
        <div>
            {last >= 0 ? 
            <div className="d-flex justify-content-center">
                <div className={` ${styles.position} card `} >
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">Current flow: {flows[last]} m&#179;/s</li>
                    <li className="list-group-item">Average flow: <b>{(averageFlows[last]).toString().slice(0,5)} m&#179;/s</b></li>
                    <li className="list-group-item">Pressure: {pressures[last]} hPa</li>
                    <li className="list-group-item">Temperature: {temperatures[last]} &#176;C</li>
                    </ul>
                </div>
            </div> : ""}
        </div>
        
        
    )
}

export default CurrentMeasurementDetails;