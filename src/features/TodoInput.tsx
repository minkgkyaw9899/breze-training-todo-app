import { FC, useContext, useEffect, useState } from "react";
import TodoContext from "../context/todoContext";

const TodoInput: FC = () => {
  const [input, setInput] = useState("");
  const { addTodoHandler, editTodo, updateTodoHandler } =
    useContext(TodoContext);

  useEffect(() => {
    if (editTodo?.title) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [editTodo]);

  const isUpdate = !!editTodo;

  return (
    <div className="my-10 flex justify-center items-center gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border outline-0 px-2 rounded border-indigo-500 ring-0 w-1/4 h-12"
        placeholder="Add Todo here"
      />
      <button
        onClick={() => {
          if (input?.trim() === "") return;
          if (isUpdate) {
            updateTodoHandler(input);
          } else {
            addTodoHandler(input);
          }
          setInput("");
        }}
        className={` h-12 px-5 rounded text-white  ${
          isUpdate
            ? "bg-green-500 active:bg-green-600"
            : "bg-indigo-500 active:bg-indigo-400"
        }`}
      >
        {isUpdate ? "Update" : "Add"}
      </button>
      {/*  <button
        onClick={() => {
          if (isUpdate && updateTodoId) {
            setIsUpdate(false);
            // todo: update todo
            const newTodo = todo.map((item) => {
              if (item.id === updateTodoId) {
                return {
                  ...item,
                  title: input,
                };
              }
              return item;
            });
            setInput("");
            return setTodo(newTodo);
          }

          if (!isUpdate) {
            if (input?.trim() === "") return;
            addTodo(input);
            setInput("");
          }
        }}
        className={` h-12 px-5 rounded text-white  ${
          isUpdate
            ? "bg-green-500 active:bg-green-600"
            : "bg-indigo-500 active:bg-indigo-400"
        }`}
      >
        {isUpdate ? "Update" : "Add"}
      </button> */}
    </div>
  );
};

export default TodoInput;
