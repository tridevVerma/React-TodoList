import styled from "styled-components";

const StyledTodoList = styled.div`
  width: 40vw;
  height: 80vh;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1.5rem;
  > form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 6rem;

    input {
      font-size: 1rem;
      padding: 0.6rem 1.2rem;
      border-top-left-radius: 2rem;
      border-bottom-left-radius: 2rem;
      background: transparent;
      border: 1px solid hsl(0, 0%, 95%);
      color: hsl(0, 0%, 95%);
    }

    button {
      font-size: 1rem;
      padding: 0.6rem 1.2rem;
      border-top-right-radius: 2rem;
      border-bottom-right-radius: 2rem;
    }
  }
`;

export default StyledTodoList;
