const API_URL = `https://jsonplaceholder.typicode.com/todos`;

const fetchTodos = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
    });
    const result = await response.json();
    if (response.ok) {
      return { success: true, todos: result };
    } else {
      throw new Error("Error while fetching todos...");
    }
  } catch (err) {
    return { success: false, message: err.message };
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

    if (response.ok) {
      return { success: true, newTodo: result };
    } else {
      throw new Error("Error while Adding todo...");
    }
  } catch (err) {
    return { success: false, message: err.message };
  }
};

const updateTodo = async (todo, newText) => {
  try {
    if (todo.id > 200) {
      return {
        success: true,
        updatedTodo: {
          ...todo,
          title: newText,
        },
      };
    }
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
    if (response.ok) {
      return { success: true, updatedTodo: result };
    } else {
      throw new Error("Error while updating todo...");
    }
  } catch (err) {
    return { success: false, message: err.message };
  }
};

const deleteTodo = async (id) => {
  try {
    if (id > 200) {
      return {
        success: true,
      };
    }
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      return { success: true };
    } else {
      throw new Error("Error while deleting todo...");
    }
  } catch (err) {
    return { success: false, message: err.message };
  }
};

const toggleTodoCompletionStatus = async (todo) => {
  try {
    if (todo.id > 200) {
      return {
        success: true,
        updatedTodo: {
          ...todo,
          completed: !todo.completed,
        },
      };
    }
    const response = await fetch(`${API_URL}/${todo.id}`, {
      method: "PUT",
      body: JSON.stringify({
        ...todo,
        completed: !todo.completed,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    console.log(result);
    if (response.ok) {
      return { success: true, updatedTodo: result };
    } else {
      throw new Error("Error while updating completion status...");
    }
  } catch (err) {
    return { success: false, message: err.message };
  }
};

const noOfCompletedTask = (tasksList) => {
  let count = 0;
  tasksList.forEach((task) => {
    if (task.completed) {
      count++;
    }
  });
  return count;
};

export {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodoCompletionStatus,
  noOfCompletedTask,
};
