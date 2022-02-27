import React from "react";
import {Form} from "react-bootstrap";
import Measurement from "../../LastMeasurements/Measurement/Measurement";


function SelectDevice(props) {
    return (
        <div className="container d-flex justify-content-around">
            <Form.Select>
                {props.device.map(device => <option key={device.id} {...device}>{device.deviceNumber}</option>)}
            </Form.Select>
        </div>
    )
}

export default SelectDevice;