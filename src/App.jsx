import Header from "./Components/Header";
import Tabs from "./Components/Tabs";
import TodoList from "./Components/TodoList";
import TodoInput from "./Components/TodoInput";
import { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Open");

  function handleAddTodo(newTodo) {
    const newTodoList = [
      ...todos,
      { id: Date.now(), input: newTodo, complete: false },
    ];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(todoId) {
    const newTodoList = todos.map((todo) =>
      todo.id === todoId ? { ...todo, complete: true } : todo
    );
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(todoId) {
    const newTodoList = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currentTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) return;

    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos || []);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        selectedTab={selectedTab}
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
};

export default App;
