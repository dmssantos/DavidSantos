import WrapperTrabalhos from "./style";
import arrowleft from "../../utils/images/icons/arrow-left.svg";
import arrowright from "../../utils/images/icons/arrow-right.svg";

function Trabalhos() {
  function nextPage(value) {
    document.getElementsByClassName("container")[0].scroll(value, 0);
  }
  return (
    <WrapperTrabalhos>
      <div className="container">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
        <div className="card">4</div>
        <div className="card">5</div>
        <div className="card">6</div>
        <div className="card">7</div>
        <div className="card">8</div>
        <div className="card">9</div>
        <div className="card">11</div>
        <div className="card">12</div>
        <div className="card">13</div>
        <div className="card">14</div>
        <div className="card">15</div>
        <div className="card">16</div>
        <div className="card">17</div>
        <div className="card">18</div>
        <div className="card">19</div>
        <div className="card">20</div>
      </div>
      <div className="WrapperPagination">
        <img src={arrowleft} alt="arrow-left" />
        <div className="pages" onClick={() => nextPage(0)} />
        <div className="pages" onClick={() => nextPage(1120)} />
        <div className="pages" onClick={() => nextPage(2240)} />
        <div className="pages" onClick={() => nextPage(3360)} />
        <div className="pages" onClick={() => nextPage(4480)} />
        <img src={arrowright} alt="arrow-right" />
      </div>
    </WrapperTrabalhos>
  );
}

export default Trabalhos;
