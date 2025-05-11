import { Dispatch, FC, SetStateAction } from "react";
import { Todo } from "./App";

type Props = {
  addTodo: (input: string) => void;
  isUpdate: boolean;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  todo: Todo[];
  setTodo: Dispatch<SetStateAction<Todo[]>>;
  updateTodoId: string;
};
const TodoInput: FC<Props> = ({
  addTodo,
  isUpdate,
  setIsUpdate,
  input,
  setInput,
  todo,
  updateTodoId,
  setTodo,
}) => {
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
      </button>
    </div>
  );
};

export default TodoInput;
