import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  const [todo, setTodo] = useState([{ input: "Add", complete: true }]);

  const [selectedtab, setselectedtab] = useState("All");

  function Addtodo(newtodo) {
    const newList = [...todo, { input: newtodo, complete: false }];
    setTodo(newList);
  }

  function Completetodo(index) {
    const l = [...todo];
    const c = l[index];
    c["complete"] = true;
    l[index] = c;
    setTodo(l);
  }

  function Deletetodo(index) {
    const newlist = todo.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodo(newlist);
  }
  return (
    <>
      <Header todo={todo}></Header>
      <TodoList></TodoList>
      <Tabs></Tabs>
      <TodoInput></TodoInput>
    </>
  );
}

export default App;
