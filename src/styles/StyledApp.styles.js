import styled from "styled-components";

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-gap: 1rem;

  > .heading {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    justify-content: space-between;
    > h1 {
      color: hsl(0, 0%, 95%);
      font-weight: 500;
      letter-spacing: 2px;
      > i {
        height: 2rem;
        margin-right: 1rem;
      }
    }

    > h2 {
      color: hsl(0, 0%, 95%);
      font-weight: 400;
      letter-spacing: 1px;
    }
  }
`;

export default StyledApp;
