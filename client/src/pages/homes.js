import { useState, useContext, useEffect } from "react";
import { StateContext } from "../context/GlobalContext";
import Layout from "../components/Layout";
import styled from "styled-components";
import GoogleApiWrapper from "../components/Map";
import { homes } from "../data/homesData";
import ListCard from "../components/ListCard";
import Footer from "../components/Footer";
import HomeDetails from "../components/HomeDetails";

const Container = styled.div`
  margin-top: 60px;
  width: 100%;
  padding: 0 calc((100vw - 1300px) / 2);
  color: ${({ theme }) => theme.primaryText};
`;

const ContainerInner = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.primaryText};
  display: ${({ display }) => display};
  flex-wrap: wrap;
  justify-content: center;
`;

const MapWrapper = styled.div`
  flex: 1;
  max-width: 1920px;
  height: calc(100vh - 60px);
  min-height: 200px;
  position: relative;
  @media screen and (max-width: 768px) {
    /* width: 100%; */
  }
`;
const ListWrapper = styled.div`
  width: 30%;
  min-width: 400px;
  padding: 0 1.5rem;
  overflow-y: scroll;
  height: calc(100vh - 60px);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HomesPage = ({ match, history }) => {
  const state = useContext(StateContext);
  const [homesList, setHomesList] = useState([...homes]);
  const [openHomeDetails, setOpenHomeDetails] = useState(false);
  const [selectedHome, setSelectedHome] = useState(null);

  useEffect(() => {
    if (match.params.id) {
      setSelectedHome(
        homesList.filter((home) => home._id === match.params.id)[0]
      );
      setOpenHomeDetails(true);
    }
  }, [match.params.id]);
  return (
    <Layout hideFooter={true}>
      <Container>{/* <h1>Homes near you</h1> */}</Container>
      <ContainerInner display={openHomeDetails ? "none" : "flex"}>
        <MapWrapper>
          <GoogleApiWrapper />
        </MapWrapper>
        <ListWrapper>
          {state.map.selectedItem !== null && (
            <ListCard {...state.map.selectedItem} />
          )}
          <div
            style={{
              display: state.map.selectedItem === null ? "block" : "none",
            }}
          >
            {homesList.map((home, i) => (
              <ListCard key={i} {...home} />
            ))}
          </div>
          <Footer />
        </ListWrapper>
      </ContainerInner>
      {openHomeDetails && selectedHome && (
        <HomeDetails
          home={selectedHome}
          back={() => {
            setOpenHomeDetails(false);
            setSelectedHome(null);
            match.params.id = undefined;
          }}
        />
      )}
    </Layout>
  );
};

export default HomesPage;
