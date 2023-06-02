import React, { useState, useEffect, useRef } from "react";
import StyledTodoList from "../styles/StyledTodoList.styles";
import { fetchTodos, addTodo, updateTodo, deleteTodo } from "../utitlity";

const TodoList = () => {
  const [todosList, setTodosList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);
  const textInput = useRef();

  async function getTodos() {
    setLoading(true);
    const result = await fetchTodos();
    if (result.success) {
      setTodosList(result.todos.slice(0, 5));
    }

    setLoading(false);
  }

  useEffect(() => {
    getTodos();
  }, []);

  const handleTodoCompletion = async (e) => {
    e.currentTarget.classList.toggle("completed-todo");
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (isEditing) {
      // Edit
      const todoIndex = todosList.findIndex(
        (todo) => todo.id === parseInt(editableTodo.id)
      );

      const result = await updateTodo(
        todosList[todoIndex],
        textInput.current.value
      );

      if (result.success) {
        setTodosList((currentList) => {
          return [
            ...currentList.slice(0, todoIndex),
            {
              ...currentList[todoIndex],
              ...result.updatedTodo,
            },
            ...currentList.slice(todoIndex + 1),
          ];
        });
      }

      setIsEditing(false);
    } else {
      // Add
      const result = await addTodo(todosList.length, textInput.current.value);
      if (result.success) {
        setTodosList((currentList) => {
          return [result.newTodo, ...currentList];
        });
      }
    }
    setLoading(false);
  };

  const handleEditTodo = (e) => {
    e.stopPropagation();
    setIsEditing(true);
    setEditableTodo(e.currentTarget.parentElement);
  };

  const handleDeleteTodo = async (e) => {
    e.stopPropagation();
    setLoading(true);
    const todoID = parseInt(e.currentTarget.parentElement.id);
    const result = await deleteTodo(todoID);
    if (result.success) {
      setTodosList(todosList.filter((todo) => todo.id !== todoID));
    }
    setLoading(false);
  };

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <StyledTodoList className="todolist-container">
      <form onSubmit={handleFormSubmission}>
        <input type="text" name="todo-content" ref={textInput} required />
        <button type="submit">
          {isEditing ? (
            <i className="fa-solid fa-pen-to-square"></i>
          ) : (
            <i className="fa-solid fa-plus"></i>
          )}
        </button>
      </form>
      <div className="todos-container">
        <ul>
          {todosList.map((todo) => {
            return (
              <li
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
              </li>
            );
          })}
        </ul>
      </div>
    </StyledTodoList>
  );
};

export default TodoList;
