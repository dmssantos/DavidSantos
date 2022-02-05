import styled from "styled-components";

const WrapperApp = styled.div`
  width: 100%;
  height: calc(100vh - 100px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div.wrapperlogo {
    width: 100%;

    img.logo-menor {
      align-self: flex-start;
    }
  }

  div.content {
    width: 100%;
    height: calc(100vh - 220px);
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default WrapperApp;
