import { useState } from "react";
import Globalstyle from "./Global-Style";
import Routing from "./routes/index";
import Menu from "./components/Menu/index";
import logo from "./utils/images/logo-menor.svg";
import WrapperApp from "./style";

function App() {
  const [active, setActive] = useState(false);

  const isActive = () => {
    setActive(true);
  };

  const isInactive = () => {
    setActive(false);
  };

  return (
    <WrapperApp>
      {active && (
        <div className="wrapperlogo">
          <img className="logo-menor" src={logo} alt="logo" />
        </div>
      )}
      <div className="content">
        <Routing />
      </div>
      <Menu logoActive={isActive} logoInactive={isInactive} />
      <Globalstyle />
    </WrapperApp>
  );
}

export default App;
