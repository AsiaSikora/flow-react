import React, {Component} from "react";
import ReportsDetails from './ReportsDetails/ReportsDetails';


class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surveys : null,
        };
    }

    loadAllSurveys() {
        fetch('http://localhost:5000/api/users/2/surveys/surveys-no-measurements')
            .then(response => response.json())
            .then(data => this.setState({surveys : data}))



    }

    componentDidMount() {
        this.loadAllSurveys();
    }

    render() {
        console.log(this.state.surveys)
        return(
            <div>
            {this.state.surveys && <ReportsDetails surveys={this.state.surveys} />}
            </div>
        )
    }


}

export default Reports;