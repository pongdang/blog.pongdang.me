import { useParams } from "react-router-dom";
import { getSloveLogItem } from "../data/solveData";

export default function SolveLogItem() {
  const params = useParams();
  const solveLogItem = getSloveLogItem(parseInt(params.solveLogItemId, 10));

  return (
    <main style={{ padding: "1rem" }}>
      <h3>{solveLogItem.name}</h3>
      <p>안녕</p>
    </main>
  );
}
