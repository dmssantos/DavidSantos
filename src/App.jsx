import styled from "styled-components";
import Globalstyle from "./Global-Style";
import Routing from "./routes/index";
import Menu from "./components/Menu/index";
import logo from "./utils/images/logo-menor.svg";

const WrapperApp = styled.div`
  width: 100%;
  height: calc(100vh - 100px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div.wrapperlogo {
    width: 100%;

    img.logo-menor {
      align-self: flex-start;
    }
  }

  div.content {
    width: 100%;
    height: calc(100vh - 250px);
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function App() {
  return (
    <WrapperApp>
      <div className="wrapperlogo">
        <img className="logo-menor" src={logo} alt="logo" />
      </div>
      <div className="content">
        <Routing />
      </div>
      <Menu />
      <Globalstyle />
    </WrapperApp>
  );
}

export default App;
