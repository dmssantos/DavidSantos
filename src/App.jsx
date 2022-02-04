import Globalstyle from "./Global-Style";
import Routing from "./routes/index";
import Menu from "./components/Menu/index";
import logo from "./utils/images/logo-menor.svg";
import WrapperApp from "./style";

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
