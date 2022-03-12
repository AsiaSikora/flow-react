import React, {useState} from "react";
import styles from './ModalForm.module.css'
import ButtonDefault from "../../ButtonDefault/ButtonDefault";
import { useForm } from 'react-hook-form';

function Form(props) {
    const [longitude, setLongitude] = useState("Provide longitude");
    const [latitude, setLatitude] = useState("Provide latitude");
    const [name, setName] = useState("Provide name");
    const [canalRadius, setCanalRadius] = useState("Provide canal radius");

    const clearNameField = () => setName('');
    const clearLongitudeField = () => setLongitude('');
    const clearLatitudeField = () => setLatitude('');
    const clearCanalRadiusField = () => setCanalRadius('');


    function ChangeLongitude(event) {
        setLongitude(event.target.value);
    }

    function ChangeLatitude(event) {
        setLatitude(event.target.value);
    }

    function ChangeName(event) {
        setName(event.target.value);
    }

    function ChangeCanalRadius(event) {
        setCanalRadius(event.target.value);
    }

    function handleSubmit(e) {

        e.preventDefault();
        console.log(longitude, latitude, name, canalRadius)
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    "name": name,
                    "gpsCoordinate1": longitude,
                    "gpsCoordinate2": latitude,
                    "canalRadius": canalRadius
                }
            )
        };
        fetch('http://localhost:5000/api/users/2/localizations', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            }).then(props.closeModal());

    }

    return (
        <>
            <h3>New localization</h3>
            <form onSubmit={handleSubmit} >
                <p>
                    <label>Name:</label>
                    <input placeholder={name} onChange={ChangeName} onfocusout={clearNameField} required="aaa"/>
                </p><br/>
                <p>
                    <label>Longitude:</label>
                    <input placeholder={longitude} onChange={ChangeLongitude} onfocusout={clearLongitudeField}/><br/>
                </p><br/>
                <p>
                    <label>Latitude:</label>
                    <input placeholder={latitude} onChange={ChangeLatitude} onfocusout={clearLatitudeField}/>
                </p><br/>
                <p>
                    <label>Canal radius:</label>
                    <input placeholder={canalRadius} onChange={ChangeCanalRadius} onfocusout={clearCanalRadiusField}/>
                </p><br/>
                <p>
                <button type="button" className="btn btn-outline-primary">Submit</button>
                    </p>

            </form>
        </>
    )
}



export default Form;