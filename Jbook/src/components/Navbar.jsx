import React from "react";
import logo from "../images/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} />
        <p>Jbook</p>
      </Logo>
      <Links>
        <NavLink to="/" className="decor">
          HOME
        </NavLink>
        <NavLink to="/manga" className="decor">
          MANGA
        </NavLink>
        <NavLink to="/Tshirt" className="decor">
          TSHIRT
        </NavLink>
        <NavLink to="/Fegurines" className="decor">
          FEGURINES
        </NavLink>
        <NavLink to="/Packs" className="decor">
          PACKS
        </NavLink>
      </Links>
      <Options>
        <Search>
          <input type="search" name="" id="" />
        </Search>
        <Profile>
          <PersonIcon />
        </Profile>
        <Basket>
          <ShoppingBagIcon />
        </Basket>
      </Options>
    </Container>
  );
};

export default Navbar;
const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: -1px 2px 21px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 2px 21px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 21px 0px rgba(0, 0, 0, 0.75);
`;
const Logo = styled.div`
  cursor: pointer;
  align-items: center;
  width: 120px;
  display: flex;
  img {
    width: 100%;
  }
  p {
    font-family: "Carter One", cursive;
    font-size: 48px;
    font-weight: 400;
  }
`;

const Links = styled.div`
  padding: 10px 60px 10px 60px;
  display: flex;
  gap: 15px;

  .decor {
    color: black;
    text-decoration: none;
  }

  a {
    cursor: pointer;
    font-family: "Asap Condensed", sans-serif;
    font-size: 20px;
    font-weight: bold;
    padding: 0 10px 0 10px;
    position: relative;
    ::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background-color: #ff0000;
      bottom: 0;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }
    :hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
`;

const Options = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Search = styled.div`
  cursor: pointer;
  input {
    border-radius: 10px;
  }
`;
const Profile = styled.div`
  cursor: pointer;
  :hover {
    transition: 0.5s;
    color: red;
  }
`;
const Basket = styled.div`
  cursor: pointer;
  :hover {
    transition: 0.5s;
    color: red;
  }
`;

