import { useState } from "react";
import { StyledApp } from "../styles";
import { TodoList } from "./";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // State tracker for total todos and completed todos
  const [totalCount, setTotalCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  // Function to set total no of todos (passed to TodosList)
  const getTotalCountOfTodos = (value) => {
    setTotalCount(value);
  };

  // Function to set no of completed todos (passed to TodosList)
  const getCompletedCountOfTodos = (value) => {
    setCompletedCount(value);
  };

  // Popup toast message caller
  //  [type --> 'success', 'error', 'info']
  //  [message --> message to show]
  const notify = (type, message) => toast(message, { type });

  // render App component
  return (
    <StyledApp className="App">
      <div className="heading">
        <h1>
          <i className="fa-solid fa-clipboard-check"></i>
          <span>Todo List</span>
        </h1>
        <h2>
          Completed : {completedCount} / {totalCount}
        </h2>
      </div>
      <TodoList
        getCompletedCountOfTodos={getCompletedCountOfTodos}
        getTotalCountOfTodos={getTotalCountOfTodos}
        notify={notify}
      />
      <ToastContainer autoClose={2000} />
    </StyledApp>
  );
}

export default App;
