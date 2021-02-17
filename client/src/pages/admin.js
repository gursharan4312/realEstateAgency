import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import HomeList from "../adminScreens/HomeList";
import HomeGrid from "../adminScreens/HomeGrid";
import { StateContext, DispatchContext } from "../context/GlobalContext";
import axios from "axios";
import HomeDetails from "../components/HomeDetails";

const Container = styled.div`
  height: 100%;

  padding: 0 calc((100vw - 1920px) / 2);
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-wrap: wrap;
  gap: 1rem;
  /* @media screen and (min-width: 768px) { */
  /* position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
  /* } */
`;

const SideBar = styled.div`
  width: 30%;
  max-width: 400px;
  min-width: 200px;
  height: 100%;
`;
const SideBarSection = styled.div`
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  transition: 0.4s all ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.backgroundVariant};
    cursor: pointer;
    transform: scaleY(1.1);
  }
  &.selected {
    background: ${({ theme }) => theme.backgroundVariant};
  }
`;
const MainContent = styled.div`
  flex: 1;
`;

function Admin() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { homes, loading, error } = state.homesList;
  const [homesList, setHomesList] = useState(homes);
  const [selectedHome, setSelectedHome] = useState(null);

  const [openedTab, setOpnedTab] = useState(0);
  useEffect(async () => {
    if (homesList.length === 0) {
      dispatch({ type: "HOME_LIST_REQUEST" });
      try {
        const { data } = await axios.get("/api/homes");
        setHomesList([...data]);
        dispatch({ type: "HOME_LIST_SUCCESS", payload: [...data] });
      } catch (e) {
        dispatch({ type: "HOME_LIST_FAIL", payload: "Someting went wrong" });
      }
    }
  }, [homesList]);
  return (
    <Layout>
      {!selectedHome ? (
        <Container>
          <SideBar>
            <SideBarSection
              className={openedTab === 0 ? "selected" : ""}
              onClick={() => setOpnedTab(0)}
            >
              <span>Property List</span>
            </SideBarSection>
            <SideBarSection
              className={openedTab === 1 ? "selected" : ""}
              onClick={() => setOpnedTab(1)}
            >
              <span>Property Grid</span>
            </SideBarSection>
          </SideBar>
          <MainContent>
            {openedTab === 0 && (
              <HomeList
                homesList={homesList}
                setSelectedHome={setSelectedHome}
              />
            )}
            {openedTab === 1 && (
              <HomeGrid
                homesList={homesList}
                setSelectedHome={setSelectedHome}
              />
            )}
          </MainContent>
        </Container>
      ) : (
        <HomeDetails home={selectedHome} back={() => setSelectedHome(null)} />
      )}
    </Layout>
  );
}

export default Admin;
