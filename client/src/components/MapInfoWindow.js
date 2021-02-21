import { useState } from "react";

import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import styled, { css } from "styled-components";
import { BsDot } from "react-icons/bs";

const InfoWindowContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
`;

const InfoWindowImgContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 1;
    cursor: pointer;
  }
`;

const arrowStyles = css`
  width: 40px;
  height: 40px;
  z-index: 2;
  color: #000;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  padding: 10px;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #ac6c2d;
    transform: scale(1.25);
  }
`;
const ForwardArrow = styled(IoChevronForward)`
  ${arrowStyles}
`;
const BackwardArrow = styled(IoChevronBack)`
  ${arrowStyles}
`;

function MapInfoWindow({ selectedPlace, history }) {
  const [selectedImg, setSelectedImg] = useState(0);
  const forward = () =>
    setSelectedImg((selectedImg + 1) % selectedPlace.images.length);
  const backward = () => {
    setSelectedImg(
      selectedImg === 0 ? selectedPlace.images.length - 1 : selectedImg - 1
    );
  };
  return (
    <InfoWindowContent>
      <InfoWindowImgContainer>
        <BackwardArrow onClick={backward} />
        <img
          src={selectedPlace.images ? selectedPlace.images[selectedImg] : ""}
          alt={selectedPlace.type}
          onClick={() => history.push(`/homes/${selectedPlace._id}`)}
        />
        <ForwardArrow onClick={forward} />
      </InfoWindowImgContainer>

      <h3>{selectedPlace.title}</h3>
      <span>${selectedPlace.price}</span>
      <span>
        {selectedPlace.type} <BsDot /> {selectedPlace.date}
      </span>
      <span>
        {selectedPlace.rooms} BED <BsDot /> {selectedPlace.washrooms} BATH{" "}
        <BsDot /> {selectedPlace.size}FT²
      </span>
      <span>PETS : {selectedPlace.pets ? " allowed" : " not allowed"}</span>
    </InfoWindowContent>
  );
}

export default MapInfoWindow;
