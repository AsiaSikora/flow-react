import { useState } from "react";
import {Form} from "react-bootstrap";
import ButtonDefault from "../../ButtonDefault/ButtonDefault";
import CurrentMeasurement from "../CurrentMeasurement/CurrentMeasurement";

function SelectDeviceLocalization(props){

    const [device, setDevice] = useState('');
    const [localization, setLocalization] = useState('');
    const [visible, setVisibility] = useState(true);
    const [survey, setSurvey] = useState('');

    const submit = (e) => {
        e.preventDefault();
        console.log(device, localization)
        const requestOptions = 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                "deviceId": device,
                "localizationId": localization
                }
            )
        };
        
        fetch('http://localhost:5000/api/users/2/surveys', requestOptions)
            .then(response => response.json())
            .then(data => setSurvey(data))
            .then(data => {
                console.log('Success:', data);
            })
            .then(setVisibility(false))
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleChangeDevice = (event) => {
        const deviceIndex = event.target.selectedIndex;
        const deviceOptionElement = event.target.childNodes[deviceIndex];
        const deviceOptionElementId = deviceOptionElement.getAttribute('id');
        setDevice(deviceOptionElementId);
        console.log("device ", deviceOptionElementId);
    }

    const handleChangeLocalization = (event) => {
        const index = event.target.selectedIndex;
        const optionElement = event.target.childNodes[index];
        const optionElementId = optionElement.getAttribute('id');
        setLocalization(optionElementId)
        console.log("localization ", optionElementId);
    }

    return(
        <div>
        {visible ?
        <div className="container">
            <form onSubmit={submit}>
                <label for="selectDevice"><b>Select device</b></label>
                <Form.Select onChange={handleChangeDevice} id="selectDevice">
                    {props.devices
                    .map(dev => <option key={dev.id} {...dev}>{dev.deviceNumber}</option>)}
                </Form.Select>
                <a href="#" className="link-secondary">Add new device</a>
                <br/>
                <label for="selectLocalization"><b>Select localization</b></label>
                <Form.Select onChange={handleChangeLocalization} id="selectLocalization">
                    {props.localizations
                    .map(loc => <option key={loc.id} {...loc}>{loc.name}</option>)}
                </Form.Select>
                <a href="#" className="link-secondary">Add new localization</a>
                <br/><br/>
                <ButtonDefault title="Submit" />
            </form>
        </div>
        : 
        <div>
            {survey && <CurrentMeasurement id={survey.id} />}
        </div>}
        </div>
    )
}

export default SelectDeviceLocalization;