import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const Homes = styled.table`
  width: 100%;
  table-layout: fixed;
  white-space: nowrap;
  td {
    width: 10%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &.address-col {
      width: 20%;
    }
  }
`;
const HomeListHeader = styled.th`
  display: flex;
  margin-top: 1rem;
  td {
    padding: 0.5rem 2rem;
    border: 1px solid ${({ theme }) => theme.primaryText};
  }
`;
const Home = styled.tr`
  display: flex;
  td {
    padding: 0.5rem 2rem;
    border: 1px solid ${({ theme }) => theme.primaryText};
  }
`;

function HomeList({ homesList }) {
  return (
    <Container>
      <Homes>
        <HomeListHeader>
          <td className="address-col">Address</td>
          <td>Price</td>
          <td>Type</td>
          <td>rooms</td>
          <td>washrooms</td>
          <td>size</td>
          <td>Actions</td>
        </HomeListHeader>
        {homesList.map((home) => (
          <Home key={home._id}>
            <td className="address-col">{home.address}</td>
            <td>{home.price}</td>
            <td>{home.type}</td>
            <td>{home.rooms}</td>
            <td>{home.washrooms}</td>
            <td>{home.size}</td>
            {/* <span>{home.}</span> */}
          </Home>
        ))}
      </Homes>
    </Container>
  );
}

export default HomeList;
