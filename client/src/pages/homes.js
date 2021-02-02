import {useState} from 'react'
import Layout from "../components/Layout";
import styled from "styled-components";
import GoogleApiWrapper from '../components/Map'
import {homes} from '../data/homesData'


const Container = styled.div`
  margin-top: 60px;
  width: 100%;
  padding: 3rem calc((100vw - 1300px) / 2);
  color: ${({ theme }) => theme.primaryText};
`;

const MapWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 50vh;
  min-height:200px;
  max-height: 500px;
  margin: 0 auto;
  position: relative;
`;

const HomesPage = () => {
  const [homesList,setHomesList] = useState([...homes])
  return (
    <Layout>
      <Container>
        <h1>Homes near you</h1>
      </Container>
        <MapWrapper >
        <GoogleApiWrapper list={homesList} />
        </MapWrapper>
    </Layout>
  );
};

export default HomesPage;
