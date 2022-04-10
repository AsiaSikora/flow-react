import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import styles from './SurveyMap.module.css';

export default function SurveyMap(props){

  let lat = props.survey.localization.gpsCoordinate2;
  let lng = props.survey.localization.gpsCoordinate1;

  return(
    <div className="container d-flex justify-content-center">
      <MapContainer
      className={styles.position}
      center={[lat, lng]}
      zoom={12}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lng]}></Marker>
    </MapContainer>

    </div>);
}