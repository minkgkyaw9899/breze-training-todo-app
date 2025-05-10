import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export type Todo = {
  id: string;
  title: string;
};

const App = () => {
  const [todo, setTodo] = useState<Todo[]>([
    { id: "id 1", title: "Todo 1" },
    { id: "id 2", title: "Todo 2" },
  ]);

  const addTodo = (input: string) => {
    const newTodo = {
      id: uuid(),
      title: input,
    };

    setTodo([newTodo, ...todo]);
  };

  const deleteTodo = (id: string) => {
    const newFilteredTodo = todo.filter((item) => item.id !== id);

    setTodo(newFilteredTodo);
  };

  return (
    <div className="">
      <h1 className="text-center my-5 text-2xl text-indigo-500 outline-0">
        Todo app
      </h1>
      <TodoInput addTodo={addTodo} />
      <TodoList deleteTodo={deleteTodo} todo={todo} />
    </div>
  );
};

export default App;

/**
 * First => Input
 * Second => Button => data => send
 * Third => Todo List
 * Fourth => Delete Todo
 * Fifth => Edit Todo
 */
