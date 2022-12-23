import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import axios from "axios";
import { useNavigate,  } from "react-router-dom";


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
// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
//   color: #044c62
// `;



const Resetpassword = () => {
    const navigate=useNavigate()
    const [emailuser,setEmail] = useState({email:''})

    const change = (e) => {
      setEmail({ [e.target.name]: e.target.value });
    }

    const Reset = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:5000/sendemail', emailuser).then((res) =>{
          console.log(res);
          
        })
    }
  return (
    <Container>
      <Wrapper>
        <Title>Reset Password</Title>
        <Form>
        <Input type="email" name='email' value={emailuser.email} onChange={(e) => change(e)} placeholder="email" required />
            {/* <Link href="/pass">Confirmpassword</Link> */}
            {/* <Input  name="email" placeholder='email' onChange={(e)=> setEmail(e.target.value)}></Input> */}
            <Button onClick={(e)=> Reset(e)} >Submit</Button>
        </Form >
      </Wrapper>
    </Container>
  );
};

export default Resetpassword;
