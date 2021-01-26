import Layout from "../components/Layout";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 60px;
  width: 100%;
  padding: 3rem calc((100vw - 1300px) / 2);
  color: ${({ theme }) => theme.primaryText};
`;

function Rentals() {
  return (
    <Layout>
      <Container>
        <h1>Rentals Us</h1>
      </Container>
    </Layout>
  );
}

export default Rentals;
