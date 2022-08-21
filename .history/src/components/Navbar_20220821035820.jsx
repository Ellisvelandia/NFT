import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <Nav>
      <div className="brand">
        <img src={logo} alt="logo" />
      </div>
      <div className="toggle"></div>
      <div className="links">
        <ul>
          li
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.nav``;
