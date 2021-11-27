/** @jsxImportSource @emotion/react */
import "./App.css";
import { Outlet, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

function App() {
  return (
    <WrapperDiv>
      <HomeLink to='/home'>PONGDANG's Blog</HomeLink>
      <StyledNav>
        <StyledLink to='/study-log'>StudyLog</StyledLink>
        <StyledLink to='/home'>HOME</StyledLink>
        <StyledLink to='/solve-log'>SolveLog</StyledLink>
      </StyledNav>
      <Outlet />
    </WrapperDiv>
  );
}

const WrapperDiv = styled.div`
  overflow-x: hidden;
`;

const StyledNav = styled.nav`
  text-align: center;
  height: 60px;
  /* border: 3px solid tomato; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
`;

const linkReset = css`
  text-decoration: none;
  color: black;
`;

const HomeLink = styled(Link)`
  ${linkReset}
  display: block;
  text-align: center;
  font-weight: bold;
  font-size: 5vw;
  color: whitesmoke;
`;

const StyledLink = styled(Link)`
  ${linkReset}
  font-weight: bold;
  font-size: 1.4rem;
  padding: 20px 44px;
  border-radius: 30px;
  background-color: #434343;
  color: #ffc0c8;
`;

export default App;
