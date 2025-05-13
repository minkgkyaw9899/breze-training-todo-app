import { FC, useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../context/todoContext";

// type Props = {
//   deleteTodo: (id: string) => void;
//   editTodo: (id: string, title: string) => void;
// };

const TodoList: FC = () => {
  const { todo } = useContext(TodoContext);

  return (
    <div className="flex justify-center items-center flex-col gap-4">
      {todo.map((todo) => {
        return <TodoItem title={todo.title} id={todo.id} key={todo.id} />;
      })}
    </div>
  );
};

export default TodoList;
