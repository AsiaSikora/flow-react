import React, {Component} from 'react';
import ButtonDefault from '../ButtonDefault/ButtonDefault';
import LastMeasurements from '../LastMeasurements/LastMeasurements';

class HomePage extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      data: null
    }
  }
  
  loadSurveys()
  {
    fetch('http://localhost:5000/api/users/2/surveys/last-five-measurements')
    .then(response => response.json())
    .then(data => this.setState({data : data}))
  }
  
  componentDidMount()
  {
    this.loadSurveys();
  }

  render(){
    return (
      <div>
        <ButtonDefault title="Start measurement"/>
        {this.state.data && <LastMeasurements surveys={this.state.data} />}
      </div>
    );
  }
  
}

export default HomePage;