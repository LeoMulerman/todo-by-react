import Todo from "./Todo";

function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
      {!todos.length && <h1>TodoList is empty</h1>}
    </div>
  );
}

export default TodoList;
