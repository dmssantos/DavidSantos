import Globalstyle from "./Global-Style";
import Routing from "./routes/index";
import { WrapperApp, WrapperContent } from "./App.style";
import Menu from "./components/Menu/index";

function App() {
  return (
    <WrapperApp>
      <WrapperContent>
        <Routing />
      </WrapperContent>

      <Menu />

      <Globalstyle />
    </WrapperApp>
  );
}

export default App;
