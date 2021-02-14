import { useState, useContext, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import styled from "styled-components/macro";
import { Button } from "../components/Button";
import { StateContext, DispatchContext } from "../context/GlobalContext";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
} from "../context/constants/userConstants";

const FormContainer = styled.div`
  margin-top: 60px;
  padding: 2rem calc((100vw - 1300px) / 2);
`;
const Form = styled.form`
  width: 40%;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 0 0 4px ${({ theme }) => theme.primaryText};
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 48px) {
    width: 100%;
  }
`;
const InputGroup = styled.label`
  margin-top: 1rem;
`;
const Input = styled.input`
  display: block;
  width: 90%;
  /* margin-left: 1.5rem; */
  margin-bottom: 1.5rem;
  padding: 0.3rem 0.7rem;
  line-height: 1.5rem;
  border: 1px solid ${({ theme }) => theme.primaryText};
  border-radius: 0.25rem;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: text;
  outline: none;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primaryText};
  &:focus {
    background: ${({ theme }) => theme.background};
    box-shadow: 0 0 5px ${({ theme }) => theme.primaryText};
  }
`;

function Login({ history, location }) {
  const state = useContext(StateContext);
  const { user } = state;
  const dispatch = useContext(DispatchContext);
  const fromPath = useRef(location.state ? location.state.from.pathname : "/");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    dispatch({ type: USER_LOGIN_SUCCESS, payload: { auth: true } });
  };

  useEffect(() => {
    if (user.user && user.user.auth) {
      history.push(fromPath.current);
    }
  }, [user]);

  return (
    <Layout>
      <FormContainer>
        <Form>
          <h2>Login as admin</h2>
          <InputGroup>
            Email:
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            Password:
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <Button
            css={`
              margin: 0 auto;
            `}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Form>
      </FormContainer>
    </Layout>
  );
}

export default Login;
