import * as Icons from "../../../utils/images/icons/icons";
import Wrapperresumo from "./style";
import Title from "../../../components/Title";

function Resumo() {
  return (
    <Wrapperresumo>
      <Title>RESUMO</Title>
      <div className="about">
        <h1>David Mattos dos Santos</h1>
        <h2>Frontend Developer</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
          dolorem animi cupiditate ex fugiat sed voluptatibus dolorum delectus
          error ipsa perspiciatis perferendis cum nihil unde quos iusto, nulla
          similique vitae! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Corrupti, at! Officia nostrum inventore, dicta voluptatum sed
          voluptatibus laudantium eligendi ea deleniti hic natus nesciunt nobis,
          aliquid nihil ut assumenda illo.
        </p>
      </div>
      <div className="contact">
        <h2>
          <img src={Icons.locationIcon} alt="icon" />
          São João de Meriti - RJ
          <br />
          <img src={Icons.contactIcon} alt="icon" />
          +55 (21) 976-981-814
          <br />
          <img src={Icons.emailIcon} alt="icon" />
          dms.santos_@hotmail.com
          <br />
          <img src={Icons.githubIcon} alt="icon" />
          dmssantos
          <br />
          <img src={Icons.linkedinIcon} alt="icon" />
          david-santos-412902161
        </h2>
      </div>
    </Wrapperresumo>
  );
}

export default Resumo;
