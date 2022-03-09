import { useState } from "react";
import ButtonDefault from "../../ButtonDefault/ButtonDefault";

function SelectDeviceLocalization(props){

    const [device, setDevice] = useState('');
    const [localization, setLocalization] = useState('');

    const submit = (e) => {
        e.preventDefault();
        console.log(device, localization)
        const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(
                      {
                        "deviceNumber": device,
                        "localizationName": localization
                      }
                    )
                };
                fetch('http://localhost:5000/api/users/2/surveys', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                      console.log('Success:', data);
                    })
                    .catch((error) => {
                      console.error('Error:', error);
                    });

    }

    return(
        <div className="container">
            <form onSubmit={submit}>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">
                        <b>Select device</b>
                    </label>
                    <select 
                    className="form-control" 
                    id="exampleFormControlSelect1"
                    value={device}
                    onChange={e => setDevice(e.target.value)}
                    >
                        {console.log(props.devices)}
                        {props.devices.map(device => <option key={device.id} {...device}>{device.deviceNumber}</option>)}
                    </select>
                </div>
                <a href="#" className="link-secondary">Add new device</a>
                <br/><br/>
                <div className="form-group">
                    <label for="exampleFormControlSelect2">
                        <b>Select localization</b>
                    </label>
                    <select 
                    multiple className="form-control" 
                    id="exampleFormControlSelect2"
                    value={localization}
                    onChange={e => setLocalization(e.target.value)}
                    >
                        {props.localizations.map(loc => <option key={loc.id} {...loc}>{loc.name}</option>)}
                    </select>
                </div>
                <a href="#" className="link-secondary">Add new localization</a>
                <br/><br/>
                <ButtonDefault title="Submit" />
            </form>
        </div>
    )
}

export default SelectDeviceLocalization;