import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import

export default function Navbar() {
  return (
    <Nav>
      <div className="brand">
        <img src={logo} alt="logo" />
      </div>
      <div className="toggle"></div>
      <div className="links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Sellers</a>
          </li>
          <li>
            <a href="#">Create</a>
          </li>
        </ul>
      </div>
      <Button />
    </Nav>
  );
}

const Nav = styled.nav``;
