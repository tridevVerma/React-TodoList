import StyledApp from "../styles/StyledApp.styles";
import { TodoList } from "./";

function App() {
  return (
    <StyledApp className="App">
      <div className="heading">
        <h1>
          <i className="fa-solid fa-clipboard-check"></i>
          <span>Todo List</span>
        </h1>
        <h2>Completed : (2 / 3)</h2>
      </div>

      <TodoList />
    </StyledApp>
  );
}

export default App;
