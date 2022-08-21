import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import hero from "../assets/hero.png";
import heroText from "../assets/heroText.png";

export default function Home() {
  return (
    <Section>
      <Navbar />
      <div className="ellipse"></div>
      <div className="container">
        <div className="content">
          <h1>
            Explore Our
            <span>
              <img src={heroText} alt="hero text" />
            </span>
            Hero Text Digital NFT Market Place
          </h1>
          <p>
            As the name implies, the NFT collection is basically a unique
            collection of NFTs. The concept of an NFT collection or project
            overshadows the value propositions of NFT artwork. For example, NFT
            artworks are generally created on a smaller scale with the
            involvement of concerned content creators or digital artists
          </p>
          .buttons
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
