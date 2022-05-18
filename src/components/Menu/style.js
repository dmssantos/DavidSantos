import styled from "styled-components";

export const Wrapper = styled.div`
  width: 384px;
  height: 64px;
  padding: 10px;

  position: fixed;
  bottom: 32px;

  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.5);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div.menu {
    width: 60px;
    height: 60px;
    border-radius: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    img.icons {
      transition: 0.3s ease-in-out;

      :hover {
        transform: scale(130%);
      }
    }
  }
`;
