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
        <img src={icons.trabalhos} alt="trablahos" />
      </div>
      <div className="menu">
        <img src={icons.curriculo} alt="curriculo" />
      </div>
      <div className="menu">
        <img src={icons.certificados} alt="certificados" />
      </div>
    </Wrapper>
  );
}

export default Menu;
