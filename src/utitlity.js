const API_URL = `https://jsonplaceholder.typicode.com/todos`;

const fetchTodos = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
    });
    const result = await response.json();
    return { success: true, todos: result };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
};

const addTodo = async (nextId, text) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        id: nextId,
        userId: 1,
        title: text,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const result = await response.json();
    return { success: true, newTodo: result };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
};

const updateTodo = async (todo, newText) => {
  try {
    const response = await fetch(`${API_URL}/${todo.id}`, {
      method: "PUT",
      body: JSON.stringify({
        ...todo,
        title: newText,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    return { success: true, updatedTodo: result };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
};

const deleteTodo = async (id) => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
};

export { fetchTodos, addTodo, updateTodo, deleteTodo };
