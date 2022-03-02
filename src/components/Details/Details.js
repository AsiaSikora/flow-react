import React, {Component} from 'react';
import Graph from './Graph/Graph.js';
import SpecialPoints from './SpecialPoints/SpecialPoints';

class Details extends Component {

    constructor(props){
        super(props)
        this.state = {
            survey: null,
        }
    }

    loadSurvey()
  {
    fetch('http://localhost:5000/api/users/1002/surveys/2')
    .then(response => response.json())
    .then(data => this.setState({survey : data}))
  }

  componentDidMount()
  {
    this.loadSurvey();
  }


    render(){
        return(
            <div>
                {this.state.survey && <Graph survey={this.state.survey} />}
                {this.state.survey && <SpecialPoints survey={this.state.survey}/>}
            </div>
        )
    }
}

export default Details;
