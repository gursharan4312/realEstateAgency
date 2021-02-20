import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import HomeList from "../adminScreens/HomeList";
import HomeGrid from "../adminScreens/HomeGrid";
import { StateContext, DispatchContext } from "../context/GlobalContext";
import axios from "axios";
import HomeDetails from "../components/HomeDetails";
import { GoDashboard } from "react-icons/go";
import { FaListUl } from "react-icons/fa";
import { BsGrid } from "react-icons/bs";

const Container = styled.div`
  height: 100%;
  padding: 0 calc((100vw - 1300px) / 2);
  padding-top: 60px;
`;

const SideBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.secondaryText};
  overflow-x: auto;
  padding: 0 0.5rem;
`;
const SideBarSection = styled.div`
  padding: 0.5rem 1rem;
  margin: 1.5rem 1rem 0;
  border-bottom: 2px solid transparent;
  color: ${({ theme }) => theme.secondaryText};
  white-space: nowrap;

  @media screen and (max-width: 480px) {
    margin: 1.5rem 0 0;
    padding: 0.5rem;
  }
  &:hover {
    border-color: ${({ theme }) => theme.primaryText};
    cursor: pointer;
  }
  &.selected {
    border-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.primaryText};
  }

  svg {
    font-size: 1.2rem;
    vertical-align: middle;
    margin-right: 0.3rem;
  }
  span {
    vertical-align: middle;
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

  const [openedTab, setOpnedTab] = useState(null);
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
        <>
          <Container>
            <SideBar>
              <SideBarSection
                className={
                  openedTab === null || openedTab === "dashboard"
                    ? "selected"
                    : ""
                }
                onClick={() => setOpnedTab(null)}
              >
                <GoDashboard />
                <span>Dashboard</span>
              </SideBarSection>
              <SideBarSection
                className={openedTab === "propertyList" ? "selected" : ""}
                onClick={() => setOpnedTab("propertyList")}
              >
                <FaListUl />
                <span>Property List</span>
              </SideBarSection>
              <SideBarSection
                className={openedTab === "propertyGrid" ? "selected" : ""}
                onClick={() => setOpnedTab("propertyGrid")}
              >
                <BsGrid />
                <span>Property Grid</span>
              </SideBarSection>
            </SideBar>
            <MainContent>
              {openedTab === "propertyList" && (
                <HomeList
                  homesList={homesList}
                  setSelectedHome={setSelectedHome}
                />
              )}
              {openedTab === "propertyGrid" && (
                <HomeGrid
                  homesList={homesList}
                  setSelectedHome={setSelectedHome}
                />
              )}
            </MainContent>
          </Container>
        </>
      ) : (
        <HomeDetails home={selectedHome} back={() => setSelectedHome(null)} />
      )}
    </Layout>
  );
}

export default Admin;
