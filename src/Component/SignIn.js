import { useState } from "react";
import styled from "styled-components";
// import {mobile} from "../responsive";
import backimg1 from '../Images/radiant-gradient.svg'
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: 
    url(${backimg1})
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #CC5577;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link1 = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  console.log("==>", error)
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={handleClick}
            // disabled={isFetching}
          >LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link1>DO NOT YOU REMEMBER THE PASSWORD?</Link1>
          <Link to="/Register" style={{ textDecoration: "none" }}>
            <Link1>CREATE A NEW ACCOUNT</Link1>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;