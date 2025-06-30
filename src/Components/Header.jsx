const Header = ({ todos }) => {
  const filteredTodos = todos.filter((t) => !t.complete);
  const numOfTasks = filteredTodos.length;

  const taskOrTasks = () => {
    if (numOfTasks <= 1) return "task";
    return "tasks";
  };

  return (
    <header>
      <h1 className="text-gradient">
        You have {numOfTasks === 0 ? "no" : numOfTasks} open {taskOrTasks()}.
      </h1>
    </header>
  );
};

export default Header;
