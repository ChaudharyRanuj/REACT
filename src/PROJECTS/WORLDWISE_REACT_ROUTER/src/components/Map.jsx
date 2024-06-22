import { useEffect, useState } from "react";
import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";

import User from "./User";
import useUrlLocation from "../hooks/useUrlLocation";
import Button from "./Button";
import useGeoLocation from "../hooks/useGeoLocation";
import { useNavigate } from "react-router-dom";

function Map({ cities }) {
  // CUSTOM HOOK useUrlLocation
  const { lat: mapLat, lng: mapLng } = useUrlLocation();
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);
  const {
    position: geoLocationPosition,
    isLoading: isLoadingPosition,
    geoLocation,
  } = useGeoLocation();

  useEffect(
    function () {
      if (mapLat && mapLng) {
        setMapPosition([mapLat, mapLng]);
      }
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geoLocationPosition) {
        setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
      }
    },
    [geoLocationPosition]
  );

  return (
    <div className={styles.mapContainer}>
      {!geoLocationPosition && (
        <Button type={"position"} onClick={geoLocation}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </Button>
      )}

      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {cities.map((city, idx) => (
          <Marker position={[city.position.lat, city.position.lng]} key={idx}>
            <Popup keepInView={true}>
              {city.cityName}. <br /> {`${city.country}`}
            </Popup>
          </Marker>
        ))}
        <DetectClick mapPosition={mapPosition} />
        <ChangeMapView position={mapPosition} />
      </MapContainer>
      <User />
    </div>
  );
}

function ChangeMapView({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick({ mapPosition }) {
  const navigate = useNavigate();

  const map = useMapEvents({
    click(e) {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });

  return mapPosition === null ? null : (
    <Marker position={mapPosition}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default Map;
