import React, { useState, useEffect, useRef } from "react";
import { StyledTodoList } from "../styles";

import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodoCompletionStatus,
  noOfCompletedTask,
} from "../utitlity";

import { Loader, Todo } from "./";

const TodoList = ({
  getCompletedCountOfTodos, // function to update no of completed todos
  getTotalCountOfTodos, // function to update total count of todos
  notify, // toast caller function
}) => {
  const [todosList, setTodosList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);
  const textInput = useRef();

  // Function to Get all todos from (https://jsonplaceholder.typicode.com/todos)
  async function getTodos() {
    setLoading(true);

    // (reference utility.js)
    const result = await fetchTodos();

    if (result.success) {
      // set initial todos-list with 6 todos
      setTodosList(result.todos.slice(0, 6));
    } else {
      // show error
      notify("error", result.message);
    }

    setLoading(false);
  }

  // Get all todos when page loads (called once)
  useEffect(() => {
    getTodos();
  }, []);

  // set total count of todos and total no of completed todos on page load (called whenever todos-list updates)
  useEffect(() => {
    getTotalCountOfTodos(todosList.length);
    getCompletedCountOfTodos(noOfCompletedTask(todosList)); // (reference utility.js)
  }, [todosList]);

  // Function to toggle todo completion status
  const handleTodoCompletion = async (e) => {
    // Get index of clicked todo
    const todoIndex = todosList.findIndex(
      (todo) => todo.id === parseInt(e.currentTarget.id)
    );

    // toggle todo completion status (function defined in utitilty.js file)
    const todo = todosList[todoIndex];
    const result = await toggleTodoCompletionStatus(todo);

    if (result.success) {
      // If toggled --> update todos-list
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
      if (result.updatedTodo.completed) {
        notify("success", "Task Completed !!");
      }
    } else {
      // If not toggled --> show error
      notify("error", result.message);
    }
  };

  // Handle input submit (Either Add todo or Update todo)
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Edit todo
    if (isEditing) {
      // Find index of todo
      const todoIndex = todosList.findIndex(
        (todo) => todo.id === parseInt(editableTodo.id)
      );

      // update todo (reference utility.js)
      const result = await updateTodo(
        todosList[todoIndex],
        textInput.current.value
      );

      if (result.success) {
        // If edited --> update todos-list
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
        // Exit edit todo mode
        setIsEditing(false);
        notify("success", "Todo Edited !!");
      } else {
        // If can't update --> show error
        notify("error", result.message);
      }
    } else {
      // Add Todo (reference utility.js)
      const result = await addTodo(todosList.length, textInput.current.value);

      if (result.success) {
        // If added --> update todos-list
        setTodosList((currentList) => {
          return [result.newTodo, ...currentList];
        });
        notify("success", "Todo Added !!");
      } else {
        // If not added --> show error
        notify("error", result.message);
      }
    }
    setLoading(false);
  };

  const handleEditTodo = (e) => {
    e.stopPropagation();
    setIsEditing(true); // Enter edit todo mode
    setEditableTodo(e.currentTarget.parentElement); // todo which should be edited
    textInput.current.focus(); // brings focus to input box
    notify("info", "Edit Mode On");
  };

  const handleDeleteTodo = async (e) => {
    e.stopPropagation();
    setLoading(true);

    // Get todo id and delete it (reference utility.js)
    const todoID = parseInt(e.currentTarget.parentElement.id);
    const result = await deleteTodo(todoID);

    if (result.success) {
      // If deleted --> update todos-list
      setTodosList(todosList.filter((todo) => todo.id !== todoID));
      notify("success", "Todo Deleted !!");
    } else {
      // If not deleted --> show error
      notify("error", result.message);
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
              autoComplete="off"
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
