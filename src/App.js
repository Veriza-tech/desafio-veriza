import styled from "styled-components";
import PokedexView from "./components/PokedexView";

const Contaner = styled.div`
  margin: 0 auto;
  width: 1280px;
`;

function App() {
  return (
    <Contaner>
      <PokedexView />
    </Contaner>
  );
}

export default App;
