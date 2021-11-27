/** @jsxImportSource @emotion/react */
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getStudyLog } from "../data/data";
import styled from "@emotion/styled";

export default function StudyLog() {
  const StudyLog = getStudyLog();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <WrapperDiv>
      <StyledNav>
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {StudyLog.filter((studyLogItem) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = studyLogItem.name.toLowerCase();
          return name.includes(filter.toLowerCase());
        }).map((studyLogItem) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "#ffc0c8",
                textDecoration: "none",
              };
            }}
            to={`/study-log/${studyLogItem.number}`}
            key={studyLogItem.number}
          >
            {studyLogItem.name}
          </NavLink>
        ))}
      </StyledNav>
      <Outlet />
    </WrapperDiv>
  );
}

const WrapperDiv = styled.div`
  display: flex;
`;

const StyledNav = styled.nav`
  font-size: 1.3rem;
  background-color: #414345;
  border-radius: 32px;
  padding: 1rem 2rem;
  color: white;
`;
