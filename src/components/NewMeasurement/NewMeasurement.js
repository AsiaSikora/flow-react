import React, {Component} from 'react';
import styles from './NewMeasurement.module.css';
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
        fetch('http://localhost:5000/api/user/getdevices',{
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(data => this.setState({devices: data}))
    }

    loadLocalizations() {
        fetch('http://localhost:5000/api/user/getlocalizations',{
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(data => this.setState({localizations: data}))
    }

    componentDidMount() {
        this.loadDevices();
        this.loadLocalizations();
    }

    loadLocalizationOnly() {
        this.loadLocalizations();
    }

    loadDevicesOnly() {
        this.loadDevices();
    }

    render() {
        return (
            <div>
                {this.state.localizations &&
                this.state.devices &&
                    <SelectDeviceLocalization 
                    localizations={this.state.localizations}
                    devices={this.state.devices}
                    loadLocalizations={this.loadLocalizationOnly.bind(this)}
                    loadDevices={this.loadDevicesOnly.bind(this)}
                     />}
            </div>
        );
    }
}


export default NewMeasurement;