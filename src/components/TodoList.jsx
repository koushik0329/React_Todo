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
// import { TodoCard } from "./TodoCard";

// export function TodoList(props) {
//   const {
//     todos = [],
//     selectedTab,
//     handleEditTodo,
//     handleCompleteTodo,
//     handleDeleteTodo,
//   } = props;

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
//             todoIndex={todoIndex} // Pass the correct index
//             {...props}
//             handleEditTodo={handleEditTodo} // Pass handleEditTodo
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

  // Create an array of objects that include both the todo and its original index
  const todosWithIndices = todos.map((todo, index) => ({
    todo,
    originalIndex: index,
  }));

  const filterTodosList =
    selectedTab === "All"
      ? todosWithIndices
      : selectedTab === "Completed"
      ? todosWithIndices.filter((item) => item.todo.complete)
      : todosWithIndices.filter((item) => !item.todo.complete);

  return (
    <>
      {filterTodosList.map((item, displayIndex) => {
        return (
          <TodoCard
            key={item.originalIndex}
            todoIndex={item.originalIndex} // Pass the original index
            todo={item.todo}
            handleEditTodo={handleEditTodo}
            handleCompleteTodo={handleCompleteTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        );
      })}
    </>
  );
}
