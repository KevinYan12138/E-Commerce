import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/apiCalls";


const Container = styled.div`
height: 60px;
${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
padding-left: 20px;
padding-bottom: 10px;
padding-right: 20px;
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

const Logo = styled.h1`
font-weight: bold;
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

const NavBar = () => {
const quantity = useSelector(state=>state.cart.quantity);
const dispatch = useDispatch();

const handleClick = (e) => {
  e.preventDefault();
  logout(dispatch);
};
return (
  <Container>
    <Wrapper>
      <Left>
        {/* <Language>EN</Language>
        <SearchContainer>
          <Input placeholder="Search" />
          <Search style={{ color: "gray", fontSize: 16 }} />
        </SearchContainer> */}
      </Left>
      <Center>
        <Logo>Kev.</Logo> 
      </Center>
      <Right>
      <Button onClick={handleClick}>LOG OUT</Button>
      <Link to="/login">
        <MenuItem>SIGN IN</MenuItem>
        </Link>
        <Link to="/cart">
        <MenuItem>
          <Badge badgeContent={quantity} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItem>
        </Link>
      </Right>
    </Wrapper>
  </Container>
);
};

export default NavBar