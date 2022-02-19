import styled from "styled-components";

const WrapperCertificados = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  img {
    width: 220px;
    margin: 0 10px 10px 0;
  }
`;

export default WrapperCertificados;
