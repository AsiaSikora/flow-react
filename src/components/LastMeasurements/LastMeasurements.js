import React from 'react';
import LastMeasurementsHeader from './LastMeasurementsHeader/LastMeasurementsHeader';
import Measurement from './Measurement/Measurement';

function LastMeasurements() {
  return (
    <div className="container">
      <LastMeasurementsHeader/>
      <Measurement />
      <Measurement />
    </div>
  );
}

export default LastMeasurements;