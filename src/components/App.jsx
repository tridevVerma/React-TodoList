import { useState } from "react";
import StyledApp from "../styles/StyledApp.styles";
import { TodoList } from "./";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [totalCount, setTotalCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  const getTotalCountOfTodos = (value) => {
    setTotalCount(value);
  };

  const getCompletedCountOfTodos = (value) => {
    setCompletedCount(value);
  };

  const notify = (type, message) => toast(message, { type });

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
