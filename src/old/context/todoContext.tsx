import { createContext, Dispatch, SetStateAction } from "react";
import { Todo } from "../../App";

export type ContextData = {
  todo: Todo[];
  editTodo: Todo | null;
  addTodoHandler: (title: string) => void;
  deleteTodoHandler: (id: string) => void;
  updateTodoHandler: (newTitle: string) => void;
  setEditTodo: Dispatch<SetStateAction<Todo | null>>;
};

const TodoContext = createContext<ContextData>({
  todo: [],
  editTodo: null,
  addTodoHandler: () => {},
  deleteTodoHandler: () => {},
  updateTodoHandler: () => {},
  setEditTodo: () => {},
});

export default TodoContext;
