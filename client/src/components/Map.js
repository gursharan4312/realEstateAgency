import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Map, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import MarkerClusterer from "@googlemaps/markerclustererplus";
import { DispatchContext } from "../context/GlobalContext";
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
    cursor: pointer;
  }
`;

const MapContainer = ({ google }) => {
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useContext(DispatchContext);
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

  const setMarkers = (props, map) => {
    let locations = homes;
    let markers =
      locations &&
      locations.map((location) => {
        let marker = new google.maps.Marker({
          position: location.position,
          title: location.title,
        });
        marker.addListener("click", () => {
          setSelectedPlace(location);
          setActiveMarker(marker);
          setShowInfoWindow(true);
          dispatch({ type: "SET_SELECTEDITEM", payload: location });
        });
        return marker;
      });
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      gridSize: 10,
      minimumClusterSize: 2,
    });
  };
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
            dispatch({ type: "REMOVE_SELECTEDITEM" });
          }
        }}
        onReady={(props, map) => setMarkers(props, map)}
      >
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
              onClick={() => history.push(`/homes/${selectedPlace._id}`)}
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
