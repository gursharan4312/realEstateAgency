import {useState} from 'react'
import Layout from "../components/Layout";
import styled from "styled-components";
import GoogleApiWrapper from '../components/Map'
import {homes} from '../data/homesData'
import ListCard from '../components/ListCard';
import Footer from '../components/Footer';


const Container = styled.div`
  margin-top: 60px;
  width: 100%;
  padding: 0 calc((100vw - 1300px) / 2);
  color: ${({ theme }) => theme.primaryText};
`;

const ContainerInner = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.primaryText};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MapWrapper = styled.div`
  width: 70%;
  max-width: 1920px;
  height: calc(100vh - 60px);
  min-height:200px;
  /* max-height: 500px; */
  position: relative;
`;
const ListWrapper = styled.div`
  width:30%;
  padding: 0 1.5rem;
  overflow-y: scroll;
  height: calc(100vh - 60px);
`;

const HomesPage = () => {
  const [homesList,setHomesList] = useState([...homes])
  return (
    <Layout hideFooter={true}>
      <Container>
        {/* <h1 >Homes near you</h1> */}
      </Container>
      <ContainerInner>
        <MapWrapper >
          <GoogleApiWrapper list={homesList} />
        </MapWrapper>
        <ListWrapper>
          {
            homesList.map((home,i)=><ListCard {...home} />)
          }
          <Footer />
        </ListWrapper>
      </ContainerInner>
    </Layout>
  );
};

export default HomesPage;
