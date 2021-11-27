/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

export default function StudyLogIndex() {
  return (
    <WrapperMain>
      <p>공부한 것을 기록하는 페이지 입니다!</p>
    </WrapperMain>
  );
}

const WrapperMain = styled.main`
  padding: 1rem 2rem;
  background-color: #414345;
  width: 100%;
  border-radius: 32px;
  margin-left: 1rem;
  color: white;
  font-size: 1.2rem;
`;
