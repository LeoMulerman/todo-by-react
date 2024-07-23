import { RiTodoFill } from "react-icons/ri";
import style from "./Todo.module.css";

function Todo({ todo, deleteTodo, index }) {
  return (
    <div className={style.todo} onDoubleClick={() => deleteTodo(index)}>
      <div className={style.text}>
        {" "}
        <RiTodoFill className={style.todoIcon} /> {todo.text}
      </div>
    </div>
  );
}

export default Todo;
