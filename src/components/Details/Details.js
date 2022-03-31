import React, {Component} from 'react';
import Graph from './Graph/Graph.js';
import SurveyDetails from './SurveyDetails/SurveyDetails';
import SpecialPoints from './SpecialPoints/SpecialPoints';
import { useParams } from "react-router-dom";
import DeleteSurvey from './DeleteSurvey/DeleteSurvey.js';

function Details() {

  const[survey, setSurvey] = React.useState(null);

  let params = useParams();

  function loadSurvey()
  {
    fetch(`http://localhost:5000/api/users/2/surveys/${params.id}`)
    .then(response => response.json())
    .then(data => setSurvey(data))
  }

  React.useEffect(() => {
    loadSurvey();
  }, [])

  return(
      <div>
          {survey && <SurveyDetails survey={survey} />}
          {survey && <Graph survey={survey} />}
          {survey && <SpecialPoints survey={survey}/>}
          {survey && <DeleteSurvey id={params.id} />}
      </div>
  )
}

export default Details;

