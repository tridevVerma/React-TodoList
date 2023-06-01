import React from "react";
import StyledTodoList from "./styles/StyledTodoList.styles";

const TodoList = () => {
  return (
    <StyledTodoList className="todolist-container">
      <form>
        <input type="text" name="todo-content" />
        <button type="submit">Add</button>
      </form>
    </StyledTodoList>
  );
};

export default TodoList;
