import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

type Todo = { userId: number; id: number; title: string; completed: boolean };

const TodoListData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Todo[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error instanceof AxiosError) {
        setError(error.message);
      }
    }
  };

  return (
    <div className="w-full px-20 space-y-12 mt-12">
      {isLoading && (
        <p className="text-center text-3xl text-indigo-600">loading.....</p>
      )}
      {error && <p className="text-center text-3xl text-red-600">{error}</p>}
      {data.length > 0 &&
        data.map((item, idx) => {
          return (
            <p className="py-1" key={item.id}>
              {idx + 1}. {item.title}
            </p>
          );
        })}
    </div>
  );
};

export default TodoListData;
