import React, {Component} from 'react';
import {Modal, Button} from "react-bootstrap";
import LastMeasurements from '../LastMeasurements/LastMeasurements';
import NewMeasurement from '../NewMeasurement/NewMeasurement';
import styles from './HomePage.module.css'

class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null,
            showNewMeasurement: false
        }
    }

    loadSurveys() {
        fetch('http://localhost:5000/api/users/2/surveys/last-five-surveys')
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
                        <button
                            className={`${styles.stop} btn btn-outline-primary`}
                            onClick={this.HideNewMeasurement.bind(this)}
                        >Stop measurement
                        </button>
                    </div>}
                {this.state.showNewMeasurement ? <NewMeasurement/> : ""}
                {this.state.data && <LastMeasurements surveys={this.state.data}/>}
            </div>
        );
    }

}

export default HomePage;