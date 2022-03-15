import React, {Component} from 'react';
import SelectDevice from './SelectDevice/SelectDevice';
import styles from './NewMeasurement.module.css';
import SelectLocalization from './SelectLocalization/SelectLocalization';
import SelectDeviceLocalization from './SelectDeviceLocalization/SelectDeviceLocalization';

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
            <div>
                {this.state.localizations &&
                this.state.devices && 
                    <SelectDeviceLocalization 
                    localizations={this.state.localizations}
                    devices={this.state.devices}
                     />}
            </div>
        );
    }
}


export default NewMeasurement;