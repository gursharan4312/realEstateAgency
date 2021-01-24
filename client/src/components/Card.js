import React from "react";
import styled, { css } from "styled-components/macro";
import { Button } from "./Button";
import { IoMdArrowRoundForward } from "react-icons/io";

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  color: var(--primary-text);
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`;
const CardImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`;
const CardHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

function Card({ image, alt, heading, buttonLabel, buttonLink }) {
  return (
    <CardContainer>
      <CardImg src={image} alt={alt} />
      <CardHeading>{heading}</CardHeading>
      <Button
        to={buttonLink}
        css={`
          background: transparent;
          color: var(--primary-text);
          /* display: inline-block; */
          justify-content: flex-start;
          padding-left: 0;
          position: relative;
          &:hover {
            color: var(--link-hover);
          }
          &:before {
            content: "";
            position: absolute;
            width: 50%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: var(--secondary-bg);
            visibility: hidden;
            transform: scaleX(0);
            transition: all 0.3s ease-in-out;
          }
          &:hover:before {
            visibility: visible;
            transform: scaleX(1);
          }
        `}
      >
        {buttonLabel}
        <Arrow />
      </Button>
    </CardContainer>
  );
}

export default Card;