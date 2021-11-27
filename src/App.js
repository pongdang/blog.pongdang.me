/** @jsxImportSource @emotion/react */
import "./App.css";
import { Outlet, NavLink, Link, useLocation } from "react-router-dom";
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

const linkResetStyle = css`
  text-decoration: none;
  color: black;
`;

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

const HomeLink = styled(Link)`
  ${linkResetStyle}
  display: block;
  text-align: center;
  font-weight: bold;
  font-size: 5vw;
  color: whitesmoke;
`;

function StyledLink(props) {
  const location = useLocation();
  const path = location.pathname;
  const to = props.to;
  return (
    <NavLink
      css={css`
        ${linkResetStyle}
        display: block;
        margin: 1rem 0;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.4rem;
        padding: 20px 44px;
        border-radius: 30px;
        color: ${to.includes(path) ? "red" : "#ffc0c8"};
        background-color: ${to.includes(path) ? "#ffdde1" : "#434343"};
        &:hover {
          background-color: #ffdde1;
        }
      `}
      {...props}
    />
  );
}
export default App;
