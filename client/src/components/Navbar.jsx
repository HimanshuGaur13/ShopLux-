import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import axios from "axios";

const Container = styled.div`
  height: 100px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: black;
`;

const Logo = styled.h1`


  font-weight: bold;
  cursor: pointer;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  const [search, setNewSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  console.log(search);
  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setNewSearch(res.data);
        console.log(res);
      } catch (err) {}
    };
    getdata();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setNewSearch(e.target.value.toLowerCase())}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Logo>SHOPLUX</Logo>
          </Link>
        </Center>
        <Right>
          <Link href="/register" style={{ textDecoration: "none" }}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link href="/login" style={{ textDecoration: "none" }}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link href="/cart">
            <MenuItem>
              <Badge overlap="rectangular" badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
