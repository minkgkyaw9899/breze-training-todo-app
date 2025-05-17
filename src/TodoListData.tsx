import { useEffect, useReducer } from "react";
import axios, { AxiosError } from "axios";

type Todo = { userId: number; id: number; title: string; completed: boolean };

type InitialState = {
  isLoading: boolean;
  data: Todo[];
  error: string | undefined;
};

const initialState: InitialState = {
  isLoading: false,
  data: [],
  error: undefined,
};

type Action =
  | {
      type: "FETCHING_API";
    }
  | {
      type: "FETCHING_SUCCESS";
      payload: {
        data: Todo[];
      };
    }
  | {
      type: "FETCHING_ERROR";
      payload: {
        error: string;
      };
    };

const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case "FETCHING_API": {
      return {
        isLoading: true,
        data: state.data,
        error: undefined,
      };
    }
    case "FETCHING_SUCCESS": {
      return {
        isLoading: false,
        error: undefined,
        data: action.payload.data,
      };
    }
    case "FETCHING_ERROR": {
      return {
        isLoading: false,
        data: [],
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};

const TodoListData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    try {
      dispatch({
        type: "FETCHING_API",
      });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      dispatch({
        type: "FETCHING_SUCCESS",
        payload: {
          data: response.data,
        },
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch({
          type: "FETCHING_ERROR",
          payload: {
            error: error.message,
          },
        });
      }
    }
  };

  if (state.isLoading)
    return <p className="text-center text-3xl text-indigo-600">loading.....</p>;

  if (state.error)
    return <p className="text-center text-3xl text-red-600">{state.error}</p>;

  return (
    <div className="w-full px-20 space-y-12 mt-12">
      {state.data.map((item, idx) => {
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
