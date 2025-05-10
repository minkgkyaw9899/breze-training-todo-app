import { FC } from "react";
import { Todo } from "./App";

type Props = Todo & {
  deleteTodo: (id: string) => void;
};

const TodoItem: FC<Props> = ({ title, id, deleteTodo }) => {
  return (
    <div className=" flex items-center w-2/4 gap-4 bg-indigo-100 px-10 py-4">
      <p className="w-full text-wrap">{title}</p>
      <button
        onClick={() => deleteTodo(id)}
        className="bg-red-500 h-12 px-2 rounded text-white"
      >
        Delete
      </button>
      <button className="bg-green-500 h-12 px-2 rounded text-white">
        Edit
      </button>
    </div>
  );
};

export default TodoItem;
