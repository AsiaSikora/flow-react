import React, {Component} from 'react';
import {Modal, Button} from "react-bootstrap";
import LastMeasurements from '../LastMeasurements/LastMeasurements';
import NewMeasurement from '../NewMeasurement/NewMeasurement';
import styles from './HomePage.module.css';
import Alert from './Alert/Alert';


class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null,
            showNewMeasurement: false
        }
    }

    loadSurveys() {
        fetch('http://localhost:5000/api/user/last-five-surveys',{
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'}
    })
            .then(response => response.json())
            .then(data => this.setState({data: data}))
    }

    componentDidMount() {
        this.loadSurveys();
    }

    ShowNewMeasurement() {
        this.setState({showNewMeasurement: true})
    }

    HideNewMeasurement() {
        this.setState({showNewMeasurement: false})
        this.loadSurveys();
    }

    render() {
        return (
            <div>
                {!this.state.showNewMeasurement ?
                    <div className={styles.button}>
                        <button
                            className={`btn btn-outline-primary`}
                            onClick={this.ShowNewMeasurement.bind(this)}
                        >Start measurement
                        </button>
                    </div>
                    :
                    <div className={`${styles.button}`}>
                        < Alert hideMeasurement={this.HideNewMeasurement.bind(this)}/>
                    </div>}
                {this.state.showNewMeasurement ? <NewMeasurement/> : ""}
                {this.state.data && <LastMeasurements surveys={this.state.data}/>}
            </div>
        );
    }

}

export default HomePage;