import styled from "styled-components";

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    288deg,
    rgba(0, 85, 255, 1) 1.5%,
    rgba(4, 56, 115, 1) 91.6%
  );
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-gap: 1rem;
  > h1 {
    margin-left: 1.5rem;
    color: hsl(0, 0%, 95%);
    font-weight: 500;
    letter-spacing: 2px;
    > i {
      height: 2rem;
      margin-right: 1rem;
    }
  }
`;

export default StyledApp;
