import React from 'react';
import ButtonDefault from '../ButtonDefault/ButtonDefault';
import LastMeasurements from '../LastMeasurements/LastMeasurements';

function HomePage() {
  return (
    <div>
      <ButtonDefault title="Start measurement"/>
      <br/><br/>
      <LastMeasurements/>

    </div>
  );
}

export default HomePage;