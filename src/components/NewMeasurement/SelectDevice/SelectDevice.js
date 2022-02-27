import React from "react";
import {Form} from "react-bootstrap";
import Measurement from "../../LastMeasurements/Measurement/Measurement";
import ButtonDefault from "../../ButtonDefault/ButtonDefault";


function SelectDevice(props) {
    return (
        <div>
            <h3>Select Device</h3>
            <Form.Select>
                {props.device.map(device => <option key={device.id} {...device}>{device.deviceNumber}</option>)}
            </Form.Select>
            <ButtonDefault title="Add new device"/>
        </div>
    )
}

export default SelectDevice;