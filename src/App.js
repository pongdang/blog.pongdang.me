import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin:0;
  padding:0;
}
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Button>버튼1</Button>
        <Button danger>버튼2</Button>
        <Anchor href="http://google.com">Go to Google</Anchor>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${(props) => (props.danger ? "#e74c3c" : "#2ecc71")};
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

export default App;
