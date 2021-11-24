import { useParams } from "react-router-dom";
import { getStudyLogItem } from "../data/data";

export default function StudyLogItem() {
  const params = useParams();
  const studyLogItem = getStudyLogItem(parseInt(params.studyLogItemId, 10));

  return (
    <main style={{ padding: "1rem" }}>
      <h3>{studyLogItem.name}</h3>
    </main>
  );
}
