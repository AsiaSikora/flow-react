import styles from './SurveyDetails.module.css'

function SurveyDetails(props) {
    let averageFlows = props.survey.measurements.map(el => el.averageFlow);
    let len = averageFlows.length;
    console.log(averageFlows);
    return(
        <div className={`${styles.position} container`}>
            <div class="card" >
                <div className="card-header">
                Survey date: {(props.survey.date).slice(0,10)}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Device number: {props.survey.device.deviceNumber}</li>
                    <li className="list-group-item">Localization name: {props.survey.localization.name}</li>
                    <li className="list-group-item">Average flow: {(averageFlows[len-1]).toString().slice(0,5)}</li>
                </ul>
            </div>
        </div>
    )
}

// style="width: 18rem;"




export default SurveyDetails;