import React, { useState, useEffect, useRef } from "react";
import StyledTodoList from "../styles/StyledTodoList.styles";
import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodoCompletionStatus,
  noOfCompletedTask,
} from "../utitlity";

import { Loader, Todo } from "./";

const TodoList = ({ getCompletedCountOfTodos, getTotalCountOfTodos }) => {
  const [todosList, setTodosList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);
  const textInput = useRef();

  async function getTodos() {
    setLoading(true);
    const result = await fetchTodos();
    if (result.success) {
      setTodosList(result.todos.slice(0, 15));
    }

    setLoading(false);
  }

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    getTotalCountOfTodos(todosList.length);
    getCompletedCountOfTodos(noOfCompletedTask(todosList));
  }, [todosList]);

  const handleTodoCompletion = async (e) => {
    const todoIndex = todosList.findIndex(
      (todo) => todo.id === parseInt(e.currentTarget.id)
    );
    const todo = todosList[todoIndex];
    const result = await toggleTodoCompletionStatus(todo);
    if (result.success) {
      setTodosList((currentList) => {
        return [
          ...currentList.slice(0, todoIndex),
          {
            ...currentList[todoIndex],
            completed: result.updatedTodo.completed,
          },
          ...currentList.slice(todoIndex + 1),
        ];
      });
    }
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
    textInput.current.focus();
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

  return (
    <StyledTodoList className="todolist-container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <form onSubmit={handleFormSubmission}>
            <input
              type="text"
              name="todo-content"
              ref={textInput}
              placeholder={isEditing ? "Edit todo ..." : "Add todo ..."}
              required
            />
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
                  <Todo
                    key={todo.id}
                    todo={todo}
                    handleTodoCompletion={handleTodoCompletion}
                    handleEditTodo={handleEditTodo}
                    handleDeleteTodo={handleDeleteTodo}
                  />
                );
              })}
            </ul>
          </div>
        </>
      )}
    </StyledTodoList>
  );
};

export default TodoList;
