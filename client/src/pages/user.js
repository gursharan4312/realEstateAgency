import { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SubNavigation, { SubNavItem } from "../components/SubNavigation";
import UserPreferences from "../components/UserPreferences";
import UserProfile from "../components/UserProfile";

const Container = styled.div`
  width: 100%;
  padding: 3rem calc((100vw - 1300px) / 2);
`;

function User() {
  const [openedTab, setOpnedTab] = useState(null);
  return (
    <Layout>
      <Container>
        <SubNavigation>
          <SubNavItem
            className={
              openedTab === null || openedTab === "profile" ? "selected" : ""
            }
            onClick={() => setOpnedTab(null)}
          >
            Profile
          </SubNavItem>
          <SubNavItem
            className={openedTab === "preferences" ? "selected" : ""}
            onClick={() => setOpnedTab("preferences")}
          >
            Preferences
          </SubNavItem>
        </SubNavigation>
        {(openedTab === null || openedTab === "profile") && <UserProfile />}
        {openedTab === "preferences" && <UserPreferences />}
      </Container>
    </Layout>
  );
}

export default User;
