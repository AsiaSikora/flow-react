import {useState} from "react";
import {Form} from "react-bootstrap";
import ButtonDefault from "../../ButtonDefault/ButtonDefault";
import {LocalizationModal} from "../../Modals/Localization/LocalizationModal";
import {DeviceModal} from "../../Modals/Device/DeviceModal";

import CurrentMeasurement from "../CurrentMeasurement/CurrentMeasurement";

function SelectDeviceLocalization(props) {

    const [device, setDevice] = useState('');
    const [localization, setLocalization] = useState('');
    const [visible, setVisibility] = useState(true);
    const [survey, setSurvey] = useState('');
    const [showModalLocalization, setShowModalLocalization] = useState(false);
    const [showModalDevice, setShowModalDevice] = useState(false);
    let devicesNumbers = [];
    const getAndAddDeviceNumbers = props.devices.map(el => devicesNumbers.push(el.deviceNumber));
    let localizationsNames = [];
    const getAndAddLocalizationsNames = props.localizations.map(el => localizationsNames.push(el.name));

    const openModalForLocalization = () => {
        setShowModalLocalization(prev => !prev);
    }

    const openModalForDevice = () => {
        setShowModalDevice(prev => !prev);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(device, localization)
        const requestOptions =
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
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

    return (
        <div>
            {visible ?
                <>
                    <div className="d-flex justify-content-md-center">
                        <button title="Add new device" type="button" className="btn btn-outline-primary" onClick={openModalForDevice}>Add new device</button>
                        <DeviceModal showModal={showModalDevice} setShowModal={setShowModalDevice}
                                     devicesNumbers={devicesNumbers} loadDevices={props.loadDevices}/>
                        <button title="Add new localization" type="button" className="btn btn-outline-primary" onClick={openModalForLocalization}>Add new localization</button>
                        <LocalizationModal showModal={showModalLocalization} setShowModal={setShowModalLocalization}
                                           localizationsNames={localizationsNames}
                                           loadLocalizations={props.loadLocalizations}/>
                    </div>
                    <div className="container">
                        <form onSubmit={submit}>
                            <br/>
                            <label form="selectDevice"><b>Select device</b></label>
                            <Form.Select onChange={handleChangeDevice} id="selectDevice">
                                <option>---</option>
                                {props.devices
                                    .map(dev => <option key={dev.id} {...dev}>{dev.deviceNumber}</option>)}
                            </Form.Select>

                            <br/>
                            <label form="selectLocalization"><b>Select localization</b></label>
                            <Form.Select onChange={handleChangeLocalization} id="selectLocalization">
                                <option>---</option>
                                {props.localizations
                                    .map(loc => <option key={loc.id} {...loc}>{loc.name}</option>)}
                            </Form.Select>

                            <br/><br/>
                            <div className="d-flex justify-content-md-center">
                            <button title="Submit" className="btn btn-outline-primary">Submit</button>
                                </div>
                        </form>
                    </div>
                </>
                :
                <div>
                    {survey && <CurrentMeasurement id={survey.id}/>}
                </div>}
        </div>

    )
}

export default SelectDeviceLocalization;