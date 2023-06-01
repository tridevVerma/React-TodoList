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
      > li {
        display: grid;
        grid-template-columns: 20px 1fr 20px 20px;
        grid-gap: 1.5rem;
        align-items: center;
        background: rgba(255, 255, 255, 0.2);
        color: hsl(0, 0%, 95%);
        border-radius: 2rem;
        padding: 0.8rem 1rem;
        text-transform: capitalize;
        overflow: hidden;
        cursor: pointer;

        > .checked-icon {
          font-size: 1.2rem;
          transition: 0.25s all;
          transform: translateX(-200%);
        }

        &:hover .checked-icon {
          transform: translateX(0%);
        }

        > p {
          transition: 0.25s all;
          margin-left: -2rem;
        }

        &:hover p {
          margin-left: -0.5rem;
        }

        > button {
          background: transparent;
        }
        > .edit-todo i {
          font-size: 1rem;
          color: hsl(120, 70%, 70%);
        }
        > .delete-todo i {
          font-size: 1rem;
          color: hsl(0, 80%, 55%);
        }
      }
    }
  }

  .completed-todo {
    > .checked-icon {
      font-size: 1.2rem;
      transform: translateX(0%) !important;
      color: hsl(120, 70%, 70%);
    }

    > p {
      margin-left: -0.5rem !important;
      text-decoration: line-through;
    }
  }
`;

export default StyledTodoList;
