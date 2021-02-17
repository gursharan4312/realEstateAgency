import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 60px;
  width: 100%;
  padding: 3rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-wrap: wrap;
`;

function admin() {
  return (
    <Layout>
      <Container>admin</Container>
    </Layout>
  );
}

export default admin;
