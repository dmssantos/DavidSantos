import styled from "styled-components";

export const Wrapper = styled.div`
  width: 460px;
  height: 60px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  justify-self: end;

  div.menu {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: var(--white);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.3s ease-in-out;

    img.icons {
      transition: 0.1s ease-in-out;
    }

    :hover {
      width: 80px;
      height: 80px;
      margin-bottom: 30px;

      img.icons {
        transform: scale(120%);
      }
    }
  }
`;
