import StyledApp from "./styles/StyledApp.styles";
import TodoList from "./TodoList";

function App() {
  return (
    <StyledApp className="App">
      <h1>
        <i className="fa-solid fa-clipboard-check"></i>
        <span>Todo List</span>
      </h1>
      <TodoList />
    </StyledApp>
  );
}

export default App;
