import { useState } from "react";
import StyledApp from "../styles/StyledApp.styles";
import { TodoList } from "./";

function App() {
  const [totalCount, setTotalCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  const getTotalCountOfTodos = (value) => {
    setTotalCount(value);
  };

  const getCompletedCountOfTodos = (value) => {
    setCompletedCount(value);
  };
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
      />
    </StyledApp>
  );
}

export default App;
