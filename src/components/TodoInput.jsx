// import { useState } from "react";

// export function TodoInput(props) {
//   const { handleAddTodo } = props;
//   const [inputValue, setInputValue] = useState("");

//   return (
//     <div className="input-container">
//       <input
//         value={inputValue}
//         onChange={(e) => {
//           setInputValue(e.target.value);
//         }}
//         placeholder="Add task"
//       />
//       <button
//         onClick={() => {
//           if (!inputValue) {
//             return;
//           }
//           handleAddTodo(inputValue);
//           setInputValue("");
//         }}
//       >
//         <i className="fa-solid fa-plus"></i>
//       </button>
//     </div>
//   );
// }

import { useState } from "react";

export function TodoInput(props) {
  const { handleAddTodo, inputValue, setInputValue, isEditing } = props;

  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder={isEditing ? "Edit task" : "Add task"} // Update placeholder based on edit mode
      />
      <button
        onClick={() => {
          if (!inputValue.trim()) {
            return;
          }
          handleAddTodo(inputValue);
          setInputValue(""); // Clear input after adding or saving
        }}
      >
        {isEditing ? "Save" : <i className="fa-solid fa-plus"></i>}{" "}
        {/* Change button text */}
      </button>
    </div>
  );
}
