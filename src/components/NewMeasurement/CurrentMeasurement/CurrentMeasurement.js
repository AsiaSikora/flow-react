import {useState, useEffect} from 'react';
import CurrentMeasurementDetails from './CurrentMeasurementDetails/CurrentMeasurementDetails';
import CurrentMeasurementGraph from './CurrentMeasurementGraph/CurrentMeasurementGraph';

function CurrentMeasurement(props){

    const [measurement, setMeasurement] = useState('');
    const[survey, setSurvey] = useState(null);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    function FetchData(){
        const requestOptions = 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                "battery": "90",
                "pressure": getRandomInt(1000, 1010),
                "temperature": getRandomInt(8, 10),
                "dimension": 20,
                "velocity": getRandomInt(10, 60)
                }
            )
        };
        fetch(`http://localhost:5000/api/surveys/${props.id}/measurements`, requestOptions)
            .then(response => response.json())
            .then(data => setMeasurement(data))
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            
        fetch(`http://localhost:5000/api/users/2/surveys/${props.id}`)
            .then(response => response.json())
            .then(data => setSurvey(data))
    }

    var interval;

    function SendData(){
        interval = setInterval(() => FetchData(), 5000)
    }

    useEffect(() => { SendData(); return () => clearInterval(interval);}, []);
    

    return(
        <div className="container">
            {survey && <CurrentMeasurementDetails survey={survey} />}
            {survey && <CurrentMeasurementGraph survey={survey} />}
        </div>
    )
}

export default CurrentMeasurement;