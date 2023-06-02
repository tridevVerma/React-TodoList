import styled from "styled-components";

const StyledTodoList = styled.div`
  width: 80vw;
  height: 80vh;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1.5rem;

  @media screen and (min-width: 1024px) {
    width: 60vw;
  }

  @media screen and (min-width: 1226px) {
    width: 40vw;
  }

  > form {
    margin-bottom: 1.5rem;
    width: 100%;
    position: sticky;
    top: 0%;
    left: 0%;
    input {
      width: 100%;
      font-size: 1rem;
      padding: 0.6rem 1.2rem;
      border-radius: 2rem;
      border: 1px solid hsl(0, 0%, 95%);
      color: hsl(0, 0%, 95%);
      background: transparent;

      &::placeholder {
        color: hsl(0, 0%, 75%);
        font-size: 0.95rem;
      }
    }

    button {
      position: absolute;
      top: 4%;
      right: 0%;
      font-size: 1rem;
      padding: 0.6rem 1.2rem;
      border-radius: 2rem;
      width: 60px;
      transform: scale(0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.4);
      > i {
        color: hsl(0, 0%, 95%);
      }
    }
  }

  > .todos-container {
    max-height: 90%;
    overflow-y: scroll;
    margin-right: -10px;

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-color: transparent;
      border-radius: 10px;
    }

    &::-webkit-scrollbar {
      width: 10px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }

    > ul {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1rem;
    }
  }

  .completed-todo {
    > .checked-icon {
      font-size: 1.2rem;
      transform: translateX(0%) !important;
      color: hsl(120, 70%, 50%);
    }

    > p {
      margin-left: -0.5rem !important;
      text-decoration: line-through;
    }
  }
`;

export default StyledTodoList;
