import React, { useState, useEffect } from "react";
import StyledTodoList from "./styles/StyledTodoList.styles";

const TodoList = () => {
  const [todosList, setTodosList] = useState([]);

  async function fetchTodos() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = await response.json();
      const tasks = result.slice(0, 15);
      setTodosList(tasks);
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleTodoCompletion = (e) => {
    e.currentTarget.classList.toggle("completed-todo");
  };

  return (
    <StyledTodoList className="todolist-container">
      <form>
        <input type="text" name="todo-content" />
        <button type="submit">
          <i className="fa-solid fa-plus"></i>
          {/* <i className="fa-solid fa-pen-to-square"></i> */}
        </button>
      </form>
      <div className="todos-container">
        <ul>
          {todosList.map((todo) => {
            return (
              <li key={todo.id} onClick={handleTodoCompletion}>
                <i className="fa-solid fa-circle-check checked-icon"></i>
                <p>{todo.title}</p>
                <button className="edit-todo">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className="delete-todo">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledTodoList>
  );
};

export default TodoList;
