import "./App.css";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

function App() {
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 10px;
  `;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>PONGDANG's Blog</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <StyledLink to='/study-log'>StudyLog</StyledLink> | <StyledLink to='/home'>HOME</StyledLink> |{" "}
        <StyledLink to='/solve-log'>SolveLog</StyledLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
