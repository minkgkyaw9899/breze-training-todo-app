import Title from "./components/Title";
import TodoListData from "./TodoListData";

export type Todo = {
  id: string;
  title: string;
};

const App = () => {
  return (
    <div className="">
      <Title />
      <TodoListData />
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
