import { FC, PropsWithChildren, useState } from "react";
import TodoContext from "../context/todoContext";
import { Todo } from "../App";
import { v4 as uuid } from "uuid";

const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [editTodo, setEditTodo] = useState<Todo | null>(null);

  const addTodoHandler = (title: string) => {
    const newTodo = {
      id: uuid(),
      title,
    };

    setTodo([newTodo, ...todo]);
  };

  const deleteTodoHandler = (id: string) => {
    const newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
  };

  const updateTodoHandler = (newTitle: string) => {
    const newTodo = todo.map((item) => {
      if (item.id === editTodo?.id) {
        return {
          ...item,
          title: newTitle,
        };
      }
      return item;
    });

    setTodo(newTodo);
    setEditTodo(null);
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        addTodoHandler,
        deleteTodoHandler,
        editTodo,
        updateTodoHandler,
        setEditTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
