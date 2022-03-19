import React from 'react';
import User from './User';

function FetchApiHook() {

    const[data, setData] = React.useState(null);

    function loadProfiles()
    {
      fetch('https://localhost:44365/api/Users/1')
      .then(response => response.json())
      .then(data => setData(data))
    }

    React.useEffect(() => {
        loadProfiles();
    }, [data])

    return (
        <div>
          <p>Fetch APi!</p>
          {console.log(data)}
          {data && <User user={data} />}
        </div>
      )

}

export default FetchApiHook; 