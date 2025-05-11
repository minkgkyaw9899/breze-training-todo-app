import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export type Todo = {
  id: string;
  title: string;
};

const App = () => {
  const [todo, setTodo] = useState<Todo[]>([]);

  useEffect(() => {
    // do thing
    const data = localStorage.getItem("todo");
    setTodo(data ? JSON.parse(data) : []);
  }, []);

  useEffect(() => {
    if (todo) {
      localStorage.setItem("todo", JSON.stringify(todo));
    }
  }, [todo]);

  const [isUpdate, setIsUpdate] = useState(false);
  const [input, setInput] = useState("");
  const [updateTodoId, setUpdateTodoId] = useState("");

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

  const editTodo = (id: string, title: string) => {
    setIsUpdate(true);
    setInput(title);
    setUpdateTodoId(id);
  };

  return (
    <div className="">
      <h1 className="text-center my-5 text-2xl text-indigo-500 outline-0">
        Todo app
      </h1>
      <TodoInput
        input={input}
        setInput={setInput}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
        addTodo={addTodo}
        todo={todo}
        updateTodoId={updateTodoId}
        setTodo={setTodo}
      />
      <TodoList editTodo={editTodo} deleteTodo={deleteTodo} todo={todo} />
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
