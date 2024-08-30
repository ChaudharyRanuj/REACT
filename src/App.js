import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";

import "./App.css";
import { useEffect, useState } from "react";

const cities = [
  {
    cityName: "Lisbon",
    country: "Portugal",
    emoji: "🇵🇹",
    date: "2027-10-31T15:59:59.138Z",
    notes: "My favorite city so far!",
    position: {
      lat: 38.727881642324164,
      lng: -9.140900099907554,
    },
    id: 73930385,
  },
  {
    cityName: "Madrid",
    country: "Spain",
    emoji: "🇪🇸",
    date: "2027-07-15T08:22:53.976Z",
    notes: "",
    position: {
      lat: 40.46635901755316,
      lng: -3.7133789062500004,
    },
    id: 17806751,
  },
  {
    cityName: "Nijar",
    country: "Spain",
    emoji: "🇪🇸",
    date: "2023-04-03T07:47:59.202Z",
    notes: "",
    position: {
      lat: "36.967508314568164",
      lng: "-2.13128394200588",
    },
    id: 984431984,
  },
  {
    cityName: "Nijar",
    country: "Spain",
    emoji: "🇪🇸",
    date: "2023-04-03T07:47:59.202Z",
    notes: "",
    position: {
      lat: "37.967508314568164",
      lng: "-2.13128394200588",
    },
    id: 984431985,
  },
  {
    cityName: "Nijar",
    country: "Spain",
    emoji: "🇪🇸",
    date: "2023-04-03T07:47:59.202Z",
    notes: "",
    position: {
      lat: "38.967508314568164",
      lng: "-2.13128394200588",
    },
    id: 984431986,
  },
];

export default function App() {
  const [position, setPosition] = useState({ lat: 40, lng: 0 });

  useEffect(
    function () {
      navigator.geolocation.getCurrentPosition((pos) =>
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude })
      );
    },
    [setPosition]
  );

  return (
    <MapContainer
      className="map"
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={7}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* {cities.map((city) => (
        <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
          <Popup>
            <h4>{city.country}</h4>
          </Popup>
        </Marker>
      ))} */}
      <LocationMarker />
    </MapContainer>
  );
}

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
