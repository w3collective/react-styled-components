import styled from "styled-components";

const Welcome = styled.div`  
  margin: auto;
  max-width: 480px;  
`;

const Heading = styled.h1`
  margin-top: 0;
  font-size: 2.5em;
`;

const Paragraph = styled.p`
  line-height: 1.4em;
  font-size: 1.2em;
`;

const Button = styled.button`
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 1em;
  font-weight: bold;
  margin: 1em 1em 0 0;
  padding: 0.75em 1em;
  background-color: ${(props) => (props.light ? "blue" : "darkblue")};
`;

function App() {
  return (
    <Welcome>
      <Heading>Hello World!</Heading>
      <Paragraph>
        Accusantium enim placeat aperiam asperiores non earum. Sit rerum nihil
        omnis in velit voluptatem. Vero amet exercitationem aut. Praesentium
        sequi quisquam ducimus.
      </Paragraph>
      <Paragraph>
        Impedit iste fuga architecto. Blanditiis maiores labore sint qui fuga
        nemo id blanditiis. Iusto officia maxime consequatur est voluptatum
        voluptatem aut.
      </Paragraph>
      <Button light>More Info</Button>
      <Button dark>Get Started</Button>
    </Welcome>
  );
}

export default App;
