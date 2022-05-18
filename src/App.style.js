import styled from "styled-components";

const WrapperApp = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 16px 64px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* div.wrapperlogo {
    width: 100%;
    margin-bottom: 10px;

    img.logo-menor {
      align-self: flex-start;
    }
  } */
`;

const WrapperContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export { WrapperApp, WrapperContent };
