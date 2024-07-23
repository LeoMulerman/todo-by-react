import { useState } from "react";
import style from "./App.module.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, idx) => index !== idx));
  };

  const addTodo = (todo) => {
    const newTodo = {
      text: todo,
      isCompleted: false,
      id: uuidv4(),
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
    console.log("hi");
  };

  return (
    <div className={style.App}>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
