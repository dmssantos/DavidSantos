import { Link } from "react-router-dom";
import { Wrapper } from "./style";
import * as icons from "../../utils/images/icons/icons";

function Menu() {
  return (
    <Wrapper>
      <div className="menu">
        <Link to="/">
          <img src={icons.home} alt="home" />
        </Link>
      </div>
      <div className="menu">
        <Link to="/perfil">
          <img src={icons.perfil} alt="perfil" />
        </Link>
      </div>
      <div className="menu">
        <Link to="/trabalhos">
          <img src={icons.trabalhos} alt="trablahos" />
        </Link>
      </div>
      <div className="menu">
        <Link to="/curriculo">
          <img src={icons.curriculo} alt="curriculo" />
        </Link>
      </div>
      <div className="menu">
        <Link to="/certificados">
          <img src={icons.certificados} alt="certificados" />
        </Link>
      </div>
    </Wrapper>
  );
}

export default Menu;
