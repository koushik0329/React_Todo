import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todo, selectedtab } = props;

  const filtertodo =
    selectedtab === "All"
      ? todo
      : selectedtab === "Completed"
      ? todo.filter((val) => val.complete)
      : todo.filter((val) => !val.complete);
  return (
    <>
      {filtertodo.map((todo, todoindex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todo.findIndex((val) => val.input == todo.input)}
            {...props}
            todo={todo}
          ></TodoCard>
        );
      })}
    </>
  );
}
