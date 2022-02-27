import React from "react";
import {Form} from "react-bootstrap";

function SelectLocalization(props) {
    return (
        <div>
            <Form.Select>
                {props.localizations
                .map(loc => <option key={loc.id} {...loc}>{loc.name}</option>)}
            </Form.Select>
        </div>
    )
}

export default SelectLocalization;