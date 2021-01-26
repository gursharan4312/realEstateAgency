import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
  background: ${({ theme }) => theme.background};
`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 600px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  padding: 2rem 0.5rem;
  position: relative;
  @media screen and (min-width: 768px) {
    top: -10%;
  }
`;
const ColumnRight = styled.div`
  padding: 2rem 0.5rem;
  position: relative;
  @media screen and (min-width: 768px) {
    top: 10%;
  }
`;

function CardSection({ itemOne, itemTwo }) {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <Card {...itemOne} />
        </ColumnLeft>
        <ColumnRight>
          <Card {...itemTwo} />
        </ColumnRight>
      </Container>
    </Section>
  );
}

export default CardSection;
