/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <WrapperDiv>
      <h2>안녕하세요👋 pongdang 입니당</h2>
      <p>현재 열심히 HTML, CSS, JavaScript, React를 공부하고 있습니다.</p>
    </WrapperDiv>
  );
}

const WrapperDiv = styled.div`
  text-align: center;
  background-color: #414345;
  border-radius: 32px;
  height: 70vh;
  color: white;
  font-size: 1.3rem;
  padding: 1rem 2rem;
`;
