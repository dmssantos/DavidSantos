import styled from "styled-components";

const WrapperTrabalhos = styled.div`
  width: 100%;
  height: 100%;

  div.container {
    width: 100%;
    height: calc(100% - 50px);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    overflow-x: scroll;

    ::-webkit-scrollbar {
      display: none;
    }

    div.card {
      background-color: white;
      width: 270px;
      height: 100%;
      margin-right: 10px;
      border-radius: 32px;
      flex-shrink: 0;
    }
  }
`;

export default WrapperTrabalhos;
