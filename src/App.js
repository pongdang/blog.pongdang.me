import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin:0;
  padding:0;
}
`;

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  padding: 20px;
  border-radius: 50px;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  ${awesomeCard};
  background-color: pink;
`;

const Input = styled.input.attrs({
  // 속성을 넣어줄 수 있다
  required: true,
  placeholder: "hello",
})`
  border: none;
  ${awesomeCard};
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Input />
      </Container>
    </>
  );
}

export default App;
