import { useState, useEffect } from 'react';
import Map from './Map/Map';

export default function Localizations(){

  const[localizations, setLocalizations] = useState(null);

  function loadLocalizations()
  {
    fetch('http://localhost:5000/api/user/getlocalizations',{
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())
    .then(data => setLocalizations(data))
  }

  useEffect(() => { loadLocalizations() }, []);

  return(
    <div>
      {localizations && <Map localizations={localizations} />}
    </div>);
}