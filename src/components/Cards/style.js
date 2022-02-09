import styled from "styled-components";

const WapperCards = styled.div`
  background-color: white;
  width: 270px;
  height: 360px;
  margin-right: 10px;
  border-radius: 32px;
  flex-shrink: 0;

  font-size: 2em;
  color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  overflow: hidden;

  :hover {
    cursor: pointer;
  }

  div.tag {
    background-color: rgba(225, 225, 225, 0.8);
    width: 100%;
    height: 40%;

    position: absolute;
    bottom: 0px;
  }
`;

export default WapperCards;
