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
    fetch('http://localhost:5000/api/Users/1')
    .then(response => response.json())
    .then(data => this.setState({data : data}))
  }

  componentDidUpdate()
  {
    console.log(this.state.data);
  }

//   componentDidMount() {
//     // Simple POST request with a JSON body using fetch
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(
//           {
//             "firstName": "John",
//             "lastName": "Snow",
//             "email": "js@example.com",
//             "password": "222"
//           }
//         )
//     };
//     fetch('http://localhost:5000/api/Users', requestOptions)
//         .then(response => response.json())
//         .then(data => {
//           console.log('Success:', data);
//         })
//         .catch((error) => {
//           console.error('Error:', error);
//         });
// }

  componentDidMount()
  {
    this.loadUsers();
  }

  render() {
    return (
      <div>
        <button class="btn btn-primary">Fetch APi!</button>
        {console.log(this.state.data)}
        {this.state.data && <User user={this.state.data} />}
      </div>
    )
  }

}

export default FetchApi;