import React from "react";
import styled from "styled-components/macro";
import ListCard from "./components/ListCard";

const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  .list-card {
    width: 25%;
    min-width: 300px;
  }
`;

function HomeGrid({ homesList, setSelectedHome }) {
  return (
    <Column>
      {homesList.map((home) => (
        <ListCard
          key={home._id}
          homeDetails={home}
          setSelectedHome={setSelectedHome}
        />
      ))}
    </Column>
  );
}

export default HomeGrid;
