import React from 'react';
import LastMeasurementsHeader from './LastMeasurementsHeader/LastMeasurementsHeader';
import Measurement from './Measurement/Measurement';

function LastMeasurements(props) {
  return (
    <div className="container">
      <LastMeasurementsHeader/>
      {props.surveys.map(survey => <Measurement key={survey.id} {...survey} />)}
    </div>
  );
}

export default LastMeasurements;