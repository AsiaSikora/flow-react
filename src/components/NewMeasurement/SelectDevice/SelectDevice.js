import React from "react";
import {Form} from "react-bootstrap";
import Measurement from "../../LastMeasurements/Measurement/Measurement";


function SelectDevice(props) {
    return (
        <div>
            <Form.Select>
                {props.device.map(device => <option key={device.id} {...device}>{device.deviceNumber}</option>)}
            </Form.Select>
        </div>
    )
}

export default SelectDevice;