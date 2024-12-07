import { useState } from "react";

export function TodoInput(props) {
  const { addtodo } = props;
  const [inputvalue, setinputvalue] = useState("");

  return (
    <div className="inout-container">
      <input
        value={inputvalue}
        onChange={(e) => {
          setinputvalue(e.target.value);
        }}
        placeholder="Add task"
      />
      <button
        onClick={() => {
          if (!inputvalue) {
            return;
          }
          addtodo(inputvalue);
          setinputvalue("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
