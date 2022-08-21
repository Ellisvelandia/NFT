import React from "react";
import styled from "styled-components";

export default function Button({ text }) {
  return (
    <Div>
      <button className={`${blue ? "blue"  }}`>{text}</button>
    </Div>
  );
}

const Div = styled.div``;
