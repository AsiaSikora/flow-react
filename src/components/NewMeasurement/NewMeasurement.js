import React, {Component} from 'react';
import SelectDevice from './SelectDevice/SelectDevice';
import styles from './NewMeasurement.module.css';
import {Dropdown, Form} from 'react-bootstrap';
import LastMeasurements from "../LastMeasurements/LastMeasurements";

class NewMeasurement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    loadDevices() {
        fetch('http://localhost:5000/api/users/2/Devices')
            .then(response => response.json())
            .then(data => this.setState({data: data}))



    }

    componentDidMount() {
        this.loadDevices();
    }

    render() {
        return (
            <>
            {this.state.data && <SelectDevice device={this.state.data} />}
            </>
        );
    }

}


export default NewMeasurement;