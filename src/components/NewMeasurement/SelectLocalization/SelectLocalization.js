import React from "react";
import {Form} from "react-bootstrap";
import ButtonDefault from "../../ButtonDefault/ButtonDefault";

function SelectLocalization(props) {
    return (
        <div>
            <h3>Select localization</h3>
            <Form.Select>
                {props.localizations.map(loc => <option key={loc.id} {...loc}>{loc.name}</option>)}
            </Form.Select>
            <ButtonDefault title="Add new localization"/>
        </div>
    )
}

export default SelectLocalization;