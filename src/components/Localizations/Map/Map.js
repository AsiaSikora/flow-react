import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './Map.module.css';
import { useNavigate } from "react-router-dom";

export default function Map(props){

  let navigate = useNavigate();

  return(
    <div className="container d-flex justify-content-center">
      <MapContainer
      className={styles.position}
      center={[52.3, 19.4]}
      zoom={6}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {props.localizations.map(loc => 
        <Marker 
            key={loc.id}
            position={[loc.gpsCoordinate2, loc.gpsCoordinate1]} 
            {...loc}>
      </Marker>)}
    </MapContainer>

    </div>);
}