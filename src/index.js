import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SolveLog from "./routes/SolveLog";
import SolveLogItem from "./routes/SolveLogItem";
import StudyLog from "./routes/StudyLog";
import StudyLogItem from "./routes/StudyLogItem";
import StudyLogIndex from "./Components/StudyLogIndex";
import SolveLogIndex from "./Components/SolveLogIndex";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='study-log' element={<StudyLog />}>
          <Route index element={<StudyLogIndex />} />
          <Route path=':studyLogItemId' element={<StudyLogItem />} />
        </Route>
        <Route path='home' element={<Home />} />
        <Route path='solve-log' element={<SolveLog />}>
          <Route index element={<SolveLogIndex />} />
          <Route path=':solveLogItemId' element={<SolveLogItem />} />
        </Route>

        {/* <Route
          path='*'
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        /> */}
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
