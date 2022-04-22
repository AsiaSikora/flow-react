import React, {Component} from "react";
import ReportsDetails from './ReportsDetails/ReportsDetails';
import SurveyDetails from "../Details/SurveyDetails/SurveyDetails";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import {Link} from "react-router-dom";
import styles from "./Reports.module.css";


class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            surveys: null
        };
    }

    loadAllSurveys() {
        fetch('http://localhost:5000/api/user/surveys-no-measurements',{
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })            .then(response => response.json())
            .then(data => this.setState({surveys: data, loading: false}))
    }

    componentDidMount() {
        this.loadAllSurveys();
    }

    render() {
        return (
            <div>
                {this.state.loading ? <LoadingIcon/> :
                    <div className={`table table-active table-bordered table-striped table-hover ${styles.survey}`}>
                        <thead>
                        <tr className="text-center width: 960px">
                            <th scope="col">Survey Id</th>
                            <th scope="col">Date</th>
                            <th scope="col">Place</th>
                            <th scope="col">Coordinates</th>
                            <th scope="col">Device number</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.surveys.map(el => <ReportsDetails key={el.id} survey={el}/>)}
                        </tbody>
                    </div>
                }
            </div>
        )
    }
}

export default Reports;