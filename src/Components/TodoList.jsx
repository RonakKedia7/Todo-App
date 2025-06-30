import TodoCard from "./TodoCard";

const TodoList = ({
  selectedTab,
  todos,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  let filterTodosList;

  if (selectedTab === "All") {
    filterTodosList = todos;
  } else if (selectedTab === "Completed") {
    filterTodosList = todos.filter((t) => t.complete);
  } else {
    filterTodosList = todos.filter((t) => !t.complete);
  }

  return (
    <>
      {filterTodosList.map((todo) => {

        return (
          <TodoCard
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        );
      })}
    </>
  );
};

export default TodoList;
