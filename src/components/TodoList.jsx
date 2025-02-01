// import { TodoCard } from "./TodoCard";

// export function TodoList(props) {
//   const { todos, selectedTab } = props;

//   const filterTodosList =
//     selectedTab === "All"
//       ? todos
//       : selectedTab === "Completed"
//       ? todos.filter((val) => val.complete)
//       : todos.filter((val) => !val.complete);

//   return (
//     <>
//       {filterTodosList.map((todo, todoIndex) => {
//         return (
//           <TodoCard
//             key={todoIndex}
//             todoIndex={todos.findIndex((val) => val.input == todo.input)}
//             {...props}
//             todo={todo}
//           />
//         );
//       })}
//     </>
//   );
// }
import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const {
    todos = [],
    selectedTab,
    handleEditTodo,
    handleCompleteTodo,
    handleDeleteTodo,
  } = props;

  const filterTodosList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todoIndex} // Pass the correct index
            {...props}
            handleEditTodo={handleEditTodo} // Pass handleEditTodo
            todo={todo}
          />
        );
      })}
    </>
  );
}
