import React, { useState } from "react";
import Logo from '@mui/icons-material/LogoDevOutlined';
import styled from "styled-components";
import BurguerButton from "./BurguerButton";
import { Button } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import SearchBar from './SearchBar'

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <div>
        <NavContainer>
          <div className="Logo">
            <a href="/"
            >
              <Logo
                sx={{
                  fontSize: 50,
                }}
              />
            </a>
          </div>
          <div className="SearchBar">
            <SearchBar />
          </div>
          <div className={`links ${clicked ? "active" : ""}`}
          >
            <a onClick={handleClick} href="/" >
              Landign
            </a>
            <a onClick={handleClick} href="/" >
              Algo
            </a>
            <a onClick={handleClick} href="/" >
              Mas
            </a>
            <a onClick={handleClick} href="/adondetemetistepelado">
              Error
            </a>
            <a onClick={handleClick} href="/login" className="a__login">
              Sing Up
            </a>
          </div>
          <div>
            <Button className="button__login" variant="outlined" href="/login" sx={{
              bgcolor: "black",
              color: "white",
              borderColor: "#333",
              borderRadius: "6px",
              '&:hover': {
                bgcolor: "inherit",
                color: 'white',
                borderColor: "inherit"
              }
            }}>Sign Up</Button>
          </div>
          <div className="burguer">
            <BurguerButton clicked={clicked} handleClick={handleClick} />
          </div>
          <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
        </NavContainer>
      </div>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
*{
  z-index:4;
}
  .button__login {
    @media (max-width: 768px) {
      display: none;
    }
  }
  padding: 0.4rem;
  // background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .Logo:hover{
    filter: drop-shadow(1px 1px 3px #888);
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .a__login {
    @media (min-width: 768px) {
      visibility:hidden; 
      display:none;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #444;
  // background-color: black;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 3;
  transition: all 0.6s ease;
  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
