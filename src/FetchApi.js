import React, { Component } from 'react';
import User from './User';

class FetchApi extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data : null
    }
  }

  loadUsers()
  {
    fetch('https://localhost:5000/api/Users')
    .then(response => response.json())
    .then(data => this.setState({data : data}))
  }

  componentDidUpdate()
  {
    console.log(this.state.data);
  }

  componentDidMount()
  {
    this.loadUsers();
  }

  render() {
    return (
      <div>
        <p>Fetch APi!</p>
        {console.log(this.state.data)}
        {this.state.data && <User user={this.state.data} />}
      </div>
    )
  }

}

export default FetchApi;