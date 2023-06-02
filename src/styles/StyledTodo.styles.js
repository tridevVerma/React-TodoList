import styled from "styled-components";

const StyledTodo = styled.li`
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
    cursor: pointer;
    background: transparent;
  }
  > .edit-todo i {
    font-size: 1rem;
    color: hsl(120, 70%, 50%);
  }
  > .delete-todo i {
    font-size: 1rem;
    color: hsl(0, 70%, 55%);
  }
`;

export default StyledTodo;
