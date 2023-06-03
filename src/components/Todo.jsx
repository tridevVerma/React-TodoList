import React from "react";
import { StyledTodo } from "../styles";

const Todo = ({
  todo, // todo-data
  handleTodoCompletion, // function to toggle todo completion status
  handleEditTodo, // function to toggle edit mode
  handleDeleteTodo, // function to delete todo
}) => {
  // render single todo component
  return (
    <StyledTodo
      key={todo.id}
      id={todo.id}
      className={todo.completed ? "completed-todo" : ""}
      onClick={handleTodoCompletion}
    >
      <i className="fa-solid fa-circle-check checked-icon"></i>
      <p>{todo.title}</p>
      <button className="edit-todo" onClick={handleEditTodo}>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
      <button className="delete-todo" onClick={handleDeleteTodo}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </StyledTodo>
  );
};

export default Todo;
