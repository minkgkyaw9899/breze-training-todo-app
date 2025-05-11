import { FC } from "react";
import { Todo } from "./App";
import TodoItem from "./TodoItem";

type Props = {
  todo: Todo[];
  deleteTodo: (id: string) => void;
  editTodo: (id: string, title: string) => void;
};

const TodoList: FC<Props> = ({ todo, deleteTodo, editTodo }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      {todo.map((todo) => {
        return (
          <TodoItem
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            title={todo.title}
            id={todo.id}
            key={todo.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
