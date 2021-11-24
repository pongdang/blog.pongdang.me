import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getStudyLog } from "../data/data";

export default function StudyLog() {
  const StudyLog = getStudyLog();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
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
                color: isActive ? "red" : "",
                textDecoration: "none",
              };
            }}
            to={`/study-log/${studyLogItem.number}`}
            key={studyLogItem.number}
          >
            {studyLogItem.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
