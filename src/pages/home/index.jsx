import WrapperHome from "./style";
import Menu from "../../components/Menu/index";
import logo from "../../utils/images/logo.svg";

function Home() {
  return (
    <>
      <WrapperHome>
        <img src={logo} alt="logo" />
      </WrapperHome>
      <Menu />
    </>
  );
}

export default Home;
