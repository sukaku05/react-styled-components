import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: #f4f6fb;
  font-family: sans-serif;
`;

const Title = styled.h1`
  color: #3b4cca;
  margin: 0;
`;

const Button = styled.button`
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => (props.primary ? "#fff" : "#3b4cca")};
  background: ${(props) => (props.primary ? "#3b4cca" : "transparent")};
  border: 2px solid #3b4cca;

  &:hover {
    opacity: 0.85;
  }
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello styled-components!</Title>
      <Button primary>Primary</Button>
      <Button>Secondary</Button>
    </Wrapper>
  );
}

export default App;
