import React, {useState, useRef} from "react";
import styles from './LocalizationModalForm.module.css'

import {useForm} from 'react-hook-form';
import 'core-js';
import 'regenerator-runtime/runtime';
import 'raf/polyfill';

import {isEqual} from 'lodash-es';
import ReactDOM from 'react-dom';
import {
    Async,
    FieldFeedback,
    FieldFeedbacks,
    FormWithConstraints,
    Input
} from 'react-form-with-constraints-bootstrap';
import {DisplayFields} from 'react-form-with-constraints-tools';
import {wait} from "@testing-library/user-event/dist/utils";

function Form(props) {
    const form = useRef(null);
    const [longitude, setLongitude] = useState("Provide longitude");
    const [latitude, setLatitude] = useState("Provide latitude");
    const [name, setName] = useState("Provide name");
    const [canalRadius, setCanalRadius] = useState("Provide canal radius");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

    const clearNameField = () => setName('');
    const clearLongitudeField = () => setLongitude('');
    const clearLatitudeField = () => setLatitude('');
    const clearCanalRadiusField = () => setCanalRadius('');
    const loadLocalizations = () => props.loadLocalizations();

    function ChangeLongitude(event) {
        setLongitude(event.target.value);
    }

    function ChangeLatitude(event) {
        setLatitude(event.target.value);
    }

    // function ChangeName(event) {
    //     setName(event.target.value);
    // }

    function ChangeCanalRadius(event) {
        setCanalRadius(event.target.value);
    }

    async function ChangeName(event) {
        setSubmitButtonDisabled(true);
        let checkIfNameAlreadyExists = props.localizationsNames.includes(event.target.value)
        setName(event.target.value);
        console.log(event.target.value);
        await form.current.validateFields(event.target);
        if (event.target.value.length > 0 && /\S/.test(event.target.value)) {
            setSubmitButtonDisabled(checkIfNameAlreadyExists)
        }
        // setSubmitButtonDisabled(!form.current.isValid());
    }

    async function checkLocalizationNameAvailability(value) {
        if (!(/\S/.test(value)) || value === '') {
            return false;
        }
        return !props.localizationsNames.includes(value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitButtonDisabled(!form.current.isValid());
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
            }).then(loadLocalizations)
            .then(props.closeModal());

    }

    return (
        <>
            <h3>New localization</h3>
            <FormWithConstraints ref={form} type="localization" onSubmit={handleSubmit}
                                 noValidate>
                <br/>
                <div className={styles.tableForm}>

                    <p>
                        <label>Name:</label>
                        <input
                            placeholder={name}
                            onChange={ChangeName}
                            onFocus={clearNameField}
                            id="localizationName"
                            name="localizationName"
                            minLength={1}
                            required
                        />
                    </p><br/>
                    <p>
                        <label>Longitude:</label>
                        <input
                            placeholder={longitude}
                            onChange={ChangeLongitude}
                            onFocus={clearLongitudeField}
                            id="longitude"
                            name="longitude"
                            required/>
                    </p><br/>
                    <p>
                        <label>Latitude:</label>
                        <input placeholder={latitude} onChange={ChangeLatitude} onFocus={clearLatitudeField} required/>
                    </p><br/>
                    <p>
                        <label>Canal radius:</label>
                        <input placeholder={canalRadius} onChange={ChangeCanalRadius} onFocus={clearCanalRadiusField}
                               required/>
                    </p><br/>

                </div>
                <FieldFeedbacks for="localizationName">
                    <FieldFeedback id="fieldForLocalization" when="tooShort">Too short</FieldFeedback>
                    <FieldFeedback when="*"/>
                    <Async
                        promise={checkLocalizationNameAvailability}
                        pending={<span className="d-block"><div className={styles.info}>...<br/></div></span>}
                        then={available =>
                            available ? (
                                <FieldFeedback key="1" style={{color: '#198754' /* $green */}}>
                                    <div className={styles.info}>Localization name available.</div><br/>
                                </FieldFeedback>
                            ) : (
                                <FieldFeedback key="2">
                                    <div className={styles.info}>Localization name already taken <br/>or wrong input, choose
                                        another.
                                    </div>
                                </FieldFeedback>
                            )
                        }
                    />

                </FieldFeedbacks>
                <br/>
                <div>
                    <button type="submit" disabled={submitButtonDisabled} className="btn btn-outline-primary">Submit
                    </button>
                </div>


            </FormWithConstraints>


            {/*<form typeof="localization" onSubmit={handleSubmit}>*/}
            {/*    <p>*/}
            {/*        <label>Name:</label>*/}
            {/*        <input placeholder={name} onChange={ChangeName} onFocus={clearNameField} required/>*/}
            {/*    </p><br/>*/}
            {/*    <p>*/}
            {/*        <label>Longitude:</label>*/}
            {/*        <input placeholder={longitude} onChange={ChangeLongitude} onFocus={clearLongitudeField} required/>*/}
            {/*    </p><br/>*/}
            {/*    <p>*/}
            {/*        <label>Latitude:</label>*/}
            {/*        <input placeholder={latitude} onChange={ChangeLatitude} onFocus={clearLatitudeField} required/>*/}
            {/*    </p><br/>*/}
            {/*    <p>*/}
            {/*        <label>Canal radius:</label>*/}
            {/*        <input placeholder={canalRadius} onChange={ChangeCanalRadius} onFocus={clearCanalRadiusField} required/>*/}
            {/*    </p><br/>*/}

            {/*    <button type="submit" className="btn btn-outline-primary">Submit</button>*/}
            {/*</form>*/}
        </>
    )
}


export default Form;