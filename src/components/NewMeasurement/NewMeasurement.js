import React, {Component} from 'react';
import SelectDevice from './SelectDevice/SelectDevice';
import styles from './NewMeasurement.module.css';
import LastMeasurements from "../LastMeasurements/LastMeasurements";
import SelectLocalization from './SelectLocalization/SelectLocalization';

class NewMeasurement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: null,
            localizations: null
        }
    }

    loadDevices() {
        fetch('http://localhost:5000/api/users/2/Devices')
            .then(response => response.json())
            .then(data => this.setState({devices: data}))
    }

    loadLocalizations() {
        fetch('http://localhost:5000/api/users/2/localizations')
            .then(response => response.json())
            .then(data => this.setState({localizations: data}))
    }

    componentDidMount() {
        this.loadDevices();
        this.loadLocalizations();
    }

    render() {
        return (
            <div className={`${styles.form} container d-flex`}>
                {this.state.devices && 
                <SelectDevice device={this.state.devices} />}
                {this.state.localizations && 
                <SelectLocalization localizations={this.state.localizations} />}
            </div>
        );
    }

}


export default NewMeasurement;