import { WrapperCarroussel, WrapperPagination } from "./style";
import Cards from "../Cards/index";
import arrowleft from "../../utils/images/icons/arrow-left.svg";
import arrowright from "../../utils/images/icons/arrow-right.svg";

function Carroussel() {
  let num = 0;

  function nextPage(value) {
    num = value;
    document.getElementById("WrapperCarroussel").scroll(value, 0);
  }

  function arrow(value) {
    if (value === "+" && num < 4480) {
      num += 1120;
    } else if (value === "-" && num > 0) {
      num -= 1120;
    }
    document.getElementById("WrapperCarroussel").scroll(num, 0);
  }

  return (
    <>
      <WrapperCarroussel id="WrapperCarroussel">
        <Cards>1</Cards>
        <Cards>2</Cards>
        <Cards>3</Cards>
        <Cards>4</Cards>
        <Cards>5</Cards>
        <Cards>6</Cards>
        <Cards>7</Cards>
        <Cards>8</Cards>
        <Cards>9</Cards>
        <Cards>10</Cards>
        <Cards>11</Cards>
        <Cards>12</Cards>
        <Cards>13</Cards>
        <Cards>14</Cards>
        <Cards>15</Cards>
        <Cards>16</Cards>
        <Cards>17</Cards>
        <Cards>18</Cards>
        <Cards>19</Cards>
        <Cards>20</Cards>
      </WrapperCarroussel>
      <WrapperPagination>
        <img src={arrowleft} alt="arrow-left" onClick={() => arrow("-")} />
        <div className="bullets" onClick={() => nextPage(0)} />
        <div className="bullets" onClick={() => nextPage(1120)} />
        <div className="bullets" onClick={() => nextPage(2240)} />
        <div className="bullets" onClick={() => nextPage(3360)} />
        <div className="bullets" onClick={() => nextPage(4480)} />
        <img src={arrowright} alt="arrow-right" onClick={() => arrow("+")} />
      </WrapperPagination>
    </>
  );
}

export default Carroussel;
