import React, {useState, useRef} from "react";
import styles from './DeviceModalForm.module.css'

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
import LoadingIcon from "../../LoadingIcon/LoadingIcon";

function Form(props) {
    const form = useRef(null);
    const [deviceNumber, setDeviceNumber] = useState("Provide number");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
    const clearNameField = () => setDeviceNumber('');

    async function ChangeName(event) {
        let checkIfNumberAlreadyExists = props.devicesNumbers.includes(parseInt(event.target.value))
        setDeviceNumber(event.target.value);
        console.log(event.target.value);
        await form.current.validateFields(event.target);
        if (event.target.value > 0) {
            setSubmitButtonDisabled(checkIfNumberAlreadyExists)
        }
    }

    async function checkDeviceNumberAvailability(value) {
        await wait(500);
        if (isNaN(value) || /\s/.test(value)){
          return false;
        }
        return !props.devicesNumbers.includes(parseInt(value));
    }


    function handleSubmit(e) {
        e.preventDefault();
        console.log(deviceNumber)
        setSubmitButtonDisabled(!form.current.isValid());
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    "deviceNumber": deviceNumber
                }
            )
        };
        fetch('http://localhost:5000/api/users/2/Devices', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            })
            .then(props.closeModal());

    }

    return (
        <>
            <h3>New device</h3>

            <FormWithConstraints ref={form} typeof="device" onSubmit={handleSubmit} noValidate>
                <p>
                    <label>
                        <div className={styles.title}>Device number:</div>
                    </label>
                    <Input
                        placeholder={deviceNumber}
                        onChange={ChangeName}
                        minLength={1}
                        onFocus={clearNameField}
                        type="tel"
                        id="deviceModal"
                        name="deviceModal"
                    />
                </p>
                <br/>
                <FieldFeedbacks for="deviceModal">
                    <FieldFeedback id="fieldForDevice" when="tooShort">Too short</FieldFeedback>
                    <FieldFeedback when="*"/>
                    <Async
                        promise={checkDeviceNumberAvailability}
                        pending={<span className="d-block"><div className={styles.info}>...</div></span>}
                        then={available =>
                            available ? (
                                <FieldFeedback key="1" style={{color: '#198754' /* $green */}}>
                                    <div className={styles.info}>Device number available.</div>
                                </FieldFeedback>
                            ) : (
                                <FieldFeedback key="2">
                                    <div className={styles.info}>Device number already taken or wrong input, choose another.</div>
                                </FieldFeedback>
                            )
                        }
                    />

                </FieldFeedbacks>
                <br/>
                <div>
                    <button type="aaa" disabled={submitButtonDisabled} className="btn btn-outline-primary">Submit
                    </button>
                </div>
            </FormWithConstraints>
        </>
    )
}


export default Form;