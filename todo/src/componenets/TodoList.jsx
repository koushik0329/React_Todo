// import { TodoCard } from "./TodoCard";

// export function TodoList(props) {
//   const { todo, selectedtab, deleteTodo, handleCompleteTodo } = props;

//   const filtertodo =
//     selectedtab === "All"
//       ? todo
//       : selectedtab === "Completed"
//       ? todo.filter((val) => val.complete)
//       : todo.filter((val) => !val.complete);
//   return (
//     <>
//       {filtertodo.map((todoI, todoindex) => {
//         return (
//           <TodoCard
//             key={todoindex}
//             todoindex={todo.findIndex((val) => val.input === todo.input)}
//             // {...props}
//             deleteTodo={deleteTodo} // Pass deleteTodo
//             handleCompleteTodo={handleCompleteTodo} // Pass handleCompleteTodo
//             todo={todoI}
//           ></TodoCard>
//         );
//       })}
//     </>
//   );
// }

import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todo, selectedtab, deleteTodo, handleCompleteTodo } = props;

  const filtertodo =
    selectedtab === "All"
      ? todo
      : selectedtab === "Completed"
      ? todo.filter((val) => val.complete)
      : todo.filter((val) => !val.complete);

  return (
    <>
      {filtertodo.map((todoItem, todoIndex) => {
        const originalIndex = todo.findIndex(
          (val) => val.input === todoItem.input
        );
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={originalIndex} // Pass the correct index
            deleteTodo={deleteTodo}
            handleCompleteTodo={handleCompleteTodo}
            todo={todoItem}
          ></TodoCard>
        );
      })}
    </>
  );
}
