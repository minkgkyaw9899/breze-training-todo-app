import { FC, useState } from "react";

type Props = {
  addTodo: (input: string) => void;
};
const TodoInput: FC<Props> = ({ addTodo }) => {
  const [input, setInput] = useState("");

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
          addTodo(input);
          setInput("");
        }}
        className="bg-indigo-500 h-12 px-5 rounded text-white active:bg-indigo-400"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
