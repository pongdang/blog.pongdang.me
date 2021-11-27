/** @jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import { getStudyLogItem } from "../data/data";
import styled from "@emotion/styled";

export default function StudyLogItem() {
  const params = useParams();
  const studyLogItem = getStudyLogItem(parseInt(params.studyLogItemId, 10));

  return (
    <WrapperMain>
      <h3>{studyLogItem.name}</h3>
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
`;
