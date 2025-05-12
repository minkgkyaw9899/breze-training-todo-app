import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Title from "./components/Title";
import TodoProvider from "./providers/TodoProvider";

export type Todo = {
  id: string;
  title: string;
};

const App = () => {
  return (
    <div className="">
      <Title />
      <TodoProvider>
        <TodoInput />
        <TodoList />
      </TodoProvider>
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
