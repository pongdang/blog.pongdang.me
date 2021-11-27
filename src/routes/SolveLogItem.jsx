/** @jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import { getSloveLogItem } from "../data/solveData";
import styled from "@emotion/styled";

export default function SolveLogItem() {
  const params = useParams();
  const solveLogItem = getSloveLogItem(parseInt(params.solveLogItemId, 10));

  return (
    <WrapperMain>
      <h3>{solveLogItem.name}</h3>
      <p>안녕</p>
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
