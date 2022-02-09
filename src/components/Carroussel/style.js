import styled from "styled-components";

const WrapperCarroussel = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  margin-bottom: 25px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow-x: hidden;
`;

const WrapperPagination = styled.div`
  width: 140px;
  height: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div.bullets {
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
`;

export { WrapperCarroussel, WrapperPagination };
