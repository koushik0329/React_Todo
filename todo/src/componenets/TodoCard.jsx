// // export function TodoCard(props) {
// //   const { todo, deletetodo, todoIndex, completetodo } = props;

// //   return (
// //     <div className="card todo-item">
// //       <p>{todo.input}</p>
// //       <div className="todo-buttons">
// //         <button
// //           onClick={() => {
// //             completetodo(todoIndex);
// //           }}
// //           disabled={todo.complete}
// //         >
// //           <h6>Done</h6>
// //         </button>
// //         <button
// //           onClick={() => {
// //             deletetodo(todoIndex);
// //           }}
// //         >
// //           <h6>Delete</h6>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// export function TodoCard(props) {
//   const { todo, deleteTodo, todoIndex, handleCompleteTodo } = props;

//   return (
//     <div className="card todo-item">
//       <p>{todo.input}</p>
//       <div className="todo-buttons">
//         <button
//           onClick={() => {
//             handleCompleteTodo(todoIndex);
//           }}
//           disabled={todo.complete}
//         >
//           <h6>Done</h6>
//         </button>
//         <button
//           onClick={() => {
//             deleteTodo(todoIndex);
//           }}
//         >
//           <h6>Delete</h6>
//         </button>
//       </div>
//     </div>
//   );
// }
export function TodoCard(props) {
  const { todo, deleteTodo, todoIndex, handleCompleteTodo } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          onClick={() => {
            handleCompleteTodo(todoIndex); // Use the correct index
          }}
          disabled={todo.complete}
        >
          <h6>Done</h6>
        </button>
        <button
          onClick={() => {
            deleteTodo(todoIndex); // Use the correct index
          }}
        >
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
