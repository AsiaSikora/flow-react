import React, {Component} from "react";
import ReportsDetails from './ReportsDetails/ReportsDetails';
import SurveyDetails from "../Details/SurveyDetails/SurveyDetails";
import LoadingIcon from "../LoadingIcon/LoadingIcon";


class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            surveys: null,
        };
    }

    loadAllSurveys() {
        fetch('http://localhost:5000/api/users/2/surveys/surveys-no-measurements')
            .then(response => response.json())
            .then(data => this.setState({surveys: data, loading: false}))
    }


    componentDidMount() {
        this.loadAllSurveys();
    }

    render() {
        return (
            <div>
                {this.state.loading ? <LoadingIcon /> :
                    <div>{this.state.surveys.map(el => <ReportsDetails key={el.id} survey={el}/>)}</div>}
            </div>
        )
    }
}

export default Reports;