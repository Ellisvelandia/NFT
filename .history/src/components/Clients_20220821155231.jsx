import React from 'react'
import styled from 'styled-components'
import client1 from "../assets/client1.png"
import client2 from "../assets/client2.png"
import client3 from "../assets/client3.png"
import client4 from "../assets/client4.png"
import client5 from "../assets/client5.png"



export default function Clients() {
  const clients = [client1, client2, client3, client4, client5];
  return (
    <Section></Section> {clients.map((client.index) => {


    })}

    </Section>
  )
}

const Section = styled.section ``;
