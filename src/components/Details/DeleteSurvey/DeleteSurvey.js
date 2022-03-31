import { Navigate } from 'react-router-dom';
import { useState } from 'react';

function DeleteSurvey(){

    const [isDeleted, setDeleted] = useState(false);
    
    function deleteSurvey()
    {
        const requestOptions = 
        {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(`http://localhost:5000/api/users/2/surveys/${props.id}`, requestOptions)
            .then(response => response.json())
            .catch((error) => {
                console.error('Error:', error);
            });
        setDeleted(true);
        
    }

    return(
        isDeleted ? 
        <Navigate to="/" /> :
        <div className="container">
            <button onClick={deleteSurvey} type="button" className="btn btn-outline-danger">Delete survey</button>
        </div>
    )
}

export default DeleteSurvey;