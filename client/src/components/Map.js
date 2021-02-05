import { useState, useEffect } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import styled, { useTheme } from "styled-components";
import { BsDot } from "react-icons/bs";
import { mapStyles } from "../globalStyles";
import { homes } from "../data/homesData";

const InfoWindowContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  img {
    object-fit: cover;
    max-height: 100px;
  }
`;

const MapContainer = ({ google }) => {
  const theme = useTheme();
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [mapStyle, setMapStyle] = useState(mapStyles.dark);
  const location = {
    lng: -122.85,
    lat: 49.183333,
  };
  useEffect(() => {
    setMapStyle(theme.name === "dark" ? mapStyles.dark : mapStyles.light);
  }, [theme]);
  return (
    <div key={mapStyle}>
      <Map
        google={google}
        zoom={12}
        styles={mapStyle}
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
            images={home.images}
            price={home.price}
            type={home.type}
            date={home.date}
            rooms={home.rooms}
            washrooms={home.washrooms}
            size={home.size}
            pets={home.pets}
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
            <img
              src={selectedPlace.images ? selectedPlace.images[0] : ""}
              alt={selectedPlace.type}
            />
            <h3>{selectedPlace.title}</h3>
            <span>${selectedPlace.price}</span>
            <span>
              {selectedPlace.type} <BsDot /> {selectedPlace.date}
            </span>
            <span>
              {selectedPlace.rooms} BED <BsDot /> {selectedPlace.washrooms} BATH{" "}
              <BsDot /> {selectedPlace.size}FT²
            </span>
            <span>
              PETS : {selectedPlace.pets ? " allowed" : " not allowed"}
            </span>
          </InfoWindowContent>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API,
})(MapContainer);
