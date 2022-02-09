import styled from "styled-components";

const WrapperTrabalhos = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  div.container {
    width: 100%;
    height: calc(100% - 50px);
    margin-bottom: 25px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    overflow-x: hidden;

    div.card {
      background-color: white;
      width: 270px;
      height: 100%;
      margin-right: 10px;
      border-radius: 32px;
      flex-shrink: 0;

      font-size: 2em;
      color: black;

      display: flex;
      align-items: center;
      justify-content: center;

      :hover {
        cursor: pointer;
      }
    }
  }

  div.WrapperPagination {
    width: 140px;
    height: 12px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div.pages {
      background-color: var(--white);

      width: 12px;
      height: 12px;
      border-radius: 100%;

      filter: opacity(30%);

      :hover {
        cursor: pointer;
      }
    }

    img:hover {
      cursor: pointer;
    }
  }
`;

export default WrapperTrabalhos;
