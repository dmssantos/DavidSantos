import styled from "styled-components";
import Globalstyle from "./Global-Style";
import Routing from "./routes/index";

const WrapperApp = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  padding: 50px 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

function App() {
  return (
    <WrapperApp>
      <Routing />
      <Globalstyle />
    </WrapperApp>
  );
}

export default App;
