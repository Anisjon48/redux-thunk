import { useEffect } from "react";
import { useDispatch } from "react-redux";  


import { UserList } from "./components/UserList";
import { TodoList } from "./components/TodoList";
import { NewTodo } from "./components/NewTodos";
import { loadTodos } from "./store/todos/todos-actions";
import { loadUsers } from "./store/users/user-actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadTodos());
  }, [])
  return (
    <div className="App">
      <h1>Hello Redux Thunk</h1>
      <NewTodo />
      <UserList />
      <TodoList />
    </div>
  );
}

export default App;
