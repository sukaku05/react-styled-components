import styled from "styled-components";
import Button from "./components/Button";
import Heading from "./components/Heading";

const Page = styled.main`
  max-width: 820px;
  margin: 0 auto;
  padding: 48px 24px 80px;
  font-family: "Segoe UI", sans-serif;
  background: #f8f9fd;
  min-height: 100vh;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
`;

function App() {
  return (
    <Page>
      <Section>
        <Heading $level={1}>Styled Components</Heading>
        <Heading $level={6}>Contoh komponen Button dan Heading</Heading>
      </Section>

      <Section>
        <Heading $level={2}>Heading</Heading>
        <Heading $level={1}>Heading 1</Heading>
        <Heading $level={2}>Heading 2</Heading>
        <Heading $level={3}>Heading 3</Heading>
        <Heading $level={4}>Heading 4</Heading>
        <Heading $level={5}>Heading 5</Heading>
        <Heading $level={6}>Heading 6</Heading>
      </Section>

      <Section>
        <Heading $level={2}>Button</Heading>

        <Heading $level={4}>Varian</Heading>
        <Row>
          <Button $variant="primary">Primary</Button>
          <Button $variant="secondary">Secondary</Button>
          <Button $variant="danger">Danger</Button>
        </Row>

        <Heading $level={4} style={{ marginTop: 24 }}>
          Ukuran
        </Heading>
        <Row>
          <Button $size="small">Small</Button>
          <Button $size="medium">Medium</Button>
          <Button $size="large">Large</Button>
        </Row>

        <Heading $level={4} style={{ marginTop: 24 }}>
          Bentuk dan status
        </Heading>
        <Row>
          <Button $pill>Pill</Button>
          <Button $variant="secondary" $pill>
            Pill Outline
          </Button>
          <Button disabled>Disabled</Button>
        </Row>
      </Section>
    </Page>
  );
}

export default App;
