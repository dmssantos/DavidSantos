import { Link } from "react-router-dom";
import { Wrapper } from "./style";
import * as icons from "../../utils/images/icons/icons";

function Menu({ logoActive, logoInactive }) {
  return (
    <Wrapper>
      <Link to="/" onClick={logoInactive}>
        <div className="menu">
          <img className="icons" src={icons.home} alt="home" />
        </div>
      </Link>

      <Link to="/trabalhos" onClick={logoActive}>
        <div className="menu">
          <img className="icons" src={icons.trabalhos} alt="trablahos" />
        </div>
      </Link>

      <Link to="/curriculo" onClick={logoActive}>
        <div className="menu">
          <img className="icons" src={icons.curriculo} alt="curriculo" />
        </div>
      </Link>

      <Link to="/certificados" onClick={logoActive}>
        <div className="menu">
          <img className="icons" src={icons.certificados} alt="certificados" />
        </div>
      </Link>
    </Wrapper>
  );
}

export default Menu;
