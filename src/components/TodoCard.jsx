// export function TodoCard(props) {
//   const {
//     todo,
//     handleDeleteTodo,
//     todoIndex,
//     handleCompleteTodo,
//     handleEditTodo,
//   } = props;

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
//             handleEditTodo(todoIndex);
//           }}
//         >
//           Edit
//         </button>
//         <button
//           onClick={() => {
//             handleDeleteTodo(todoIndex);
//           }}
//         >
//           <h6>Delete</h6>
//         </button>
//       </div>
//     </div>
//   );
// }

export function TodoCard(props) {
  const {
    todo, // The current todo item
    handleDeleteTodo, // Function to delete the todo
    todoIndex, // Index of the current todo
    handleCompleteTodo, // Function to mark the todo as completed
    handleEditTodo, // Function to initiate the edit workflow
  } = props;

  return (
    <div className="card todo-item">
      <p style={{ textDecoration: todo.complete ? "line-through" : "none" }}>
        {todo.input} {/* Display the todo input */}
      </p>
      <div className="todo-buttons">
        {/* Button to mark the todo as completed */}
        <button
          onClick={() => handleCompleteTodo(todoIndex)}
          disabled={todo.complete} // Disable if already completed
        >
          <h6>{todo.complete ? "Completed" : "Done"}</h6>
        </button>

        {/* Button to edit the todo */}
        <button onClick={() => handleEditTodo(todoIndex)}>
          <h6>Edit</h6>
        </button>

        {/* Button to delete the todo */}
        <button onClick={() => handleDeleteTodo(todoIndex)}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
