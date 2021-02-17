import React from "react";
import styled from "styled-components/macro";
import ListCard from "./components/ListCard";

const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  gap: 1rem;
  .list-card {
    width: 25%;
    min-width: 300px;
  }
`;

function HomeGrid({ homesList }) {
  console.log(homesList);
  return (
    <Column>
      {homesList.map((home) => (
        <ListCard key={home._id} {...home} />
      ))}
    </Column>
  );
}

export default HomeGrid;
