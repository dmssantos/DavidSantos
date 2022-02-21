import styled from "styled-components";

const Wrapperresumo = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 64px;

  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: var(--white);

  div.about {
    width: 50%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 2em;
      margin-bottom: 8px;
    }

    h2 {
      font-size: 20px;
      margin-bottom: 16px;
    }

    p {
      font-size: 1em;
    }
  }

  div.contact {
    width: 50%;
    height: 80%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 20px;
      line-height: 40px;

      img {
        margin-right: 20px;
      }
    }
  }
`;

export default Wrapperresumo;
