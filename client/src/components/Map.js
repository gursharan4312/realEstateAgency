import { useState, useEffect } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import styled from "styled-components";
import { homes } from "../data/homesData";

const InfoWindowContent = styled.div`
  color: #000;
`;

const MapContainer = ({ google }) => {
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const location = {
    lng: -122.85,
    lat: 49.183333,
  };
  return (
    <Map
      google={google}
      zoom={12}
      initialCenter={{
        ...location,
      }}
      onClick={() => {
        if (showInfoWindow) {
          setActiveMarker(null);
          setShowInfoWindow(false);
        }
      }}
    >
      {homes.map((home, i) => (
        <Marker
          key={i}
          title={home.title}
          name={home.name}
          position={home.position}
          onClick={(props, marker) => {
            setSelectedPlace(props);
            setActiveMarker(marker);
            setShowInfoWindow(true);
          }}
        ></Marker>
      ))}
      <InfoWindow
        marker={activeMarker}
        visible={showInfoWindow}
        onClose={() => {
          setActiveMarker(null);
          setShowInfoWindow(false);
        }}
      >
        <InfoWindowContent>
          <h1>{selectedPlace.name}</h1>
        </InfoWindowContent>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API,
})(MapContainer);
