import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import {mobile} from "../responsive";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.postimg.cc/hv5ctNVS/pexels-photo-4173116.jpg")
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
  ${mobile({ width: "75%" })}
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
z-index: 1;
position: relative;
font-size: inherit;
font-family: inherit;
color: white;
padding: 0.5em 1em;
outline: none;
border: none;
background-color: hsl(236, 32%, 26%);
overflow: hidden;
transition: color 0.4s ease-in-out;

`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: #044c62
`;

const Error = styled.span`
  color: red;
`

const Register = () => {
  const[name, setName] = useState("")
  const[password, setPassword] = useState("")
  const[email, setEmail] = useState("")

  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state)=> state.user)

  const handleClick = (e)=>{
    e.preventDefault();
    register(dispatch,{ name, email, password })
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input  
            placeholder="username"
            onChange={(e)=> setName(e.target.value)} />
            <Input 
            placeholder="email"
            onChange={(e)=> setEmail(e.target.value)} />
          <Input
            placeholder="password"
            type = "password"
            onChange={(e)=> setPassword(e.target.value)} />
          <Button className="balls" onClick={handleClick} disabled={isFetching} >REGISTER</Button>
          <Link href ="/login">ALREADY HAVE AN ACCOUNT</Link>
          <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;