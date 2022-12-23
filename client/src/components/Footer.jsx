import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Reddit,
  Room,
  Twitter
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 10px 0px;
  `;

const SocialContainer = styled.div`
    display: flex;
  `;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;

const Title = styled.h3`
    margin-bottom: 30px;
  `;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-left: 80px;
  `;

const ListItem = styled.li`
  `;

const Link = styled.a`
  width: 100%;
  margin-bottom: 10px;
  `;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;

const Payment = styled.img`
      width: 50%;
  `;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ShopLux.JS</Logo>
        <Desc>
        SHOPLUX, a fashion and lifestyle brand, is SmartData Retail’s digital commerce initiative 
        and is the ultimate fashion destination for styles that are handpicked, 
        on trend and at prices that are the best you’ll find anywhere.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="ff4500">
            <Reddit />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title style={{marginLeft:"80px"}}>Useful Links</Title>
        <List>
          <Link href="/">
            <ListItem>Home</ListItem>
          </Link>
          <Link href="/cart">
            <ListItem>Cart</ListItem>
          </Link>
          <Link href="/products/men">
            <ListItem>Men Fashion</ListItem>
          </Link>
          <Link href="/products/women">
            <ListItem>Women Fashion</ListItem>
          </Link>
          <Link href="/products/accessories">
            <ListItem>Accessories</ListItem>
          </Link>

        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Everest Tower, Sahasrtadhara Road, Dehradun
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 8880999010
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> shopluxjs@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;

