import { FC, useContext } from "react";
import { Todo } from "../../App";
import TodoContext from "../context/todoContext";

type Props = Todo & {};

const TodoItem: FC<Props> = ({ title, id }) => {
  const { deleteTodoHandler, editTodo, setEditTodo } = useContext(TodoContext);
  return (
    <div className=" flex items-center w-2/4 gap-4 bg-indigo-100 px-10 py-4">
      <p className="w-full text-wrap">{title}</p>
      <button
        onClick={() => {
          deleteTodoHandler(id);
        }}
        className="bg-red-500 h-12 px-2 rounded text-white"
      >
        Delete
      </button>
      <button
        onClick={() => {
          if (editTodo) {
            return setEditTodo(null);
          }
          setEditTodo({ id, title });
        }}
        className={`h-12 px-2 rounded text-white ${
          editTodo !== null ? "bg-orange-500" : "bg-green-500"
        }`}
      >
        {editTodo !== null ? "Cancel" : "Edit"}
      </button>
    </div>
  );
};

export default TodoItem;
