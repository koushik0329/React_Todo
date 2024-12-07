export function Tabs(props) {
  const { todo, selectedtab, setselectedtab } = props;
  const tabs = ["All", "Completed", "Open"];

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const noftasks =
          tab === "All"
            ? todo.length
            : tab === "Open"
            ? todo.filter((val) => !val.complete).length
            : todo.filter((val) => val.complete).length;

        return (
          <button
            onClick={() => {
              setselectedtab(tab);
            }}
            key={tabIndex}
            className={
              "tab-button " + (tab == selectedtab ? " tab-selected" : " ")
            }
          >
            <h4>
              {tab} <span>({noftasks})</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
}
