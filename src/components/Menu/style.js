import styled from "styled-components";

export const Wrapper = styled.div`
  width: 588px;
  height: 60px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div.menu {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: var(--white);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
