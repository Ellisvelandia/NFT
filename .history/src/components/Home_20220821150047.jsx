import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

export default function Home() {
  return (
    <Section>
      <Navbar />
      <div className="ellipse"></div>
      <div className="container">
        <div className="content">
          
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 0.5rem;
  background-color: #232835;
  border-radius: 1rem;
  height: 100vh;
`;
