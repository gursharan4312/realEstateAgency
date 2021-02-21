import { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Container = styled.div`
  margin-top: 60px;
  width: 100%;
  padding: 3rem calc((100vw - 1300px) / 2);
`;

function addhome() {
  return (
    <Layout>
      <Container>
        <h1>List Home to Market</h1>
      </Container>
    </Layout>
  );
}

export default addhome;
