import { useState } from "react";

const TodoInput = ({ handleAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          if (!inputValue) return;
          handleAddTodo(inputValue);
          setInputValue("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoInput;
