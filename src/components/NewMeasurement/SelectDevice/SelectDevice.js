import React from "react";
import {Form} from "react-bootstrap";
import ButtonDefault from "../../ButtonDefault/ButtonDefault";


function SelectDevice(props) {
    return (
        <div>
            <h5>Select Device</h5>
            <Form.Select>
                {props.device.map(device => <option key={device.id} {...device}>{device.deviceNumber}</option>)}
            </Form.Select>
            <ButtonDefault title="Add new device"/>
        </div>
    )
}

export default SelectDevice;