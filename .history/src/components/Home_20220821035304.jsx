import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

export default function Home() {
  return (
    <Section>
      <Navbar />
    </Section>
  );
}

const Section = styled.section`
margin: 0.5rem;
`;
