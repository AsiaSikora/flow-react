import {useState} from "react";
import ButtonDefault from "../../ButtonDefault/ButtonDefault";
import {LocalizationModal} from "../../Modals/Localization/LocalizationModal";
import {DeviceModal} from "../../Modals/Device/DeviceModal";


function SelectDeviceLocalization(props) {

    const [device, setDevice] = useState('');
    const [localization, setLocalization] = useState('');
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
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
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


    return (
        <>
            <ButtonDefault title="Add new localization" onClick={openModalForLocalization}/>
            <LocalizationModal showModal={showModalLocalization} setShowModal={setShowModalLocalization} localizationsNames={localizationsNames} loadLocalizations={props.loadLocalizations}/>
            <ButtonDefault title="Add new device" onClick={openModalForDevice}/>
            <DeviceModal showModal={showModalDevice} setShowModal={setShowModalDevice} devicesNumbers={devicesNumbers} loadDevices={props.loadDevices}/>
            <div className="container">
                <form onSubmit={submit}>
                    <div className="form-group">
                        <label form="exampleFormControlSelect1">
                            <b>Select device</b>
                        </label>
                        <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            value={device}
                            onChange={e => setDevice(e.target.value)}
                        >
                            {props.devices.map(device => <option
                                key={device.id} {...device}>{device.deviceNumber}</option>)}
                        </select>
                    </div>

                    <br/><br/>
                    <div className="form-group">
                        <label form="exampleFormControlSelect2">
                            <b>Select localization</b>
                        </label>
                        <select
                            className="form-control"
                            id="exampleFormControlSelect2"
                            value={localization}
                            onChange={e => setLocalization(e.target.value)}
                        >
                            {props.localizations.map(loc => <option key={loc.id} {...loc}>{loc.name}</option>)}
                        </select>
                    </div>
                    <br/><br/>
                    <ButtonDefault title="Submit"/>
                </form>
            </div>
        </>
    )
}

export default SelectDeviceLocalization;