const Tabs = ({ todos, selectedTab, setSelectedTab }) => {
  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        let numOfTasks;
        if (tab === "All") {
          numOfTasks = todos.length;
        } else if (tab === "Open") {
          numOfTasks = todos.filter((t) => !t.complete).length;
        } else {
          numOfTasks = todos.filter((t) => t.complete).length;
        }

        return (
          <button
            onClick={() => {
              setSelectedTab(tab);
            }}
            key={tabIndex}
            className={`tab-button ${
              tab === selectedTab ? "tab-selected" : ""
            }`}
          >
            <h4>
              {tab}
              <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
};

export default Tabs;
