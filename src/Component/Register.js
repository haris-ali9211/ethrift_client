import styled from "styled-components";
import backimg1 from '../Images/radiant-gradient.svg'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";
import { useNavigate } from "react-router-dom";

// import { mobile } from "../responsive";

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
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #CC5577;
  color: white;
  cursor: pointer;
`;

const Register = () => {

  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [email, setemail] = useState("");
  const dispatch = useDispatch();


  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
    navigate("/SignIn");
    setPassword("");
    setUsername("");
    console.log("hello")
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username"
            required
            value={username}
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)} autoFocus
          />
          <Input placeholder="email"
            required
            value={email}
            type="text"
            placeholder="email"
            onChange={(e) => setemail(e.target.value)}
          />
          <Input placeholder="password"
            required
            value={password}
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input placeholder="confirm password"
            required
            value={cpassword}
            type="password"
            placeholder="confrim password"
            onChange={(e) => setcPassword(e.target.value)}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          {password === cpassword
            ?
            <Button onClick={handleClick}>CREATE</Button>
            :
            <Button disabled>CREATE</Button>
          }
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;