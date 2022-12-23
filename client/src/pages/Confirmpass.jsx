import { useState} from "react";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import axios from "axios";
import { useLocation, useNavigate} from 'react-router-dom'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.postimg.cc/hv5ctNVS/pexels-photo-4173116.jpg") center;
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
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: #044c62
`;
const Confirmpassword = () => {
  const navigate=useNavigate()
  const location = useLocation();
  const userid = location.pathname.split("/")[2];
  const token1 = location.pathname.split("/")[3];
  const [emailuser,setEmail] = useState({password:''})
   
   const change = (e) => {
   setEmail({[e.target.name]: e.target.value });
    }
    
    const Reset = (e) =>{
      e.preventDefault();
      axios.post(`http://localhost:5000/sendemail/${userid}/${token1}`,emailuser).then((res) =>{
          navigate('/login')
          console.log("res...",res);
          // console.log("Token...", token1)
          // console.log("userid...", userid)
        })  
    }
  return (
    <Container>
      <Wrapper>
        <Title>Enter New Password</Title>
        <Form>
        <Input type="password" name='password' value={emailuser.password} onChange={(e) => change(e)} placeholder="Password" required />
        <Button onClick = {(e)=> Reset(e)}>Submit</Button>
        <Link href ="/register">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Confirmpassword;
