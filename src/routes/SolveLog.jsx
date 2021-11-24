import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getSloveLog } from "../data/solveData";

export default function SolveLog() {
  const SloveLog = getSloveLog();
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
        {SloveLog.filter((sloveLogItem) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = sloveLogItem.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        }).map((sloveLogItem) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
                textDecoration: "none",
              };
            }}
            to={`/solveLog/${sloveLogItem.number}`}
            key={sloveLogItem.number}
          >
            {sloveLogItem.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
