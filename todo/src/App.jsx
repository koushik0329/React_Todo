import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  const [todo, setTodo] = useState([{ input: "Add", complete: true }]);

  const [selectedtab, setselectedtab] = useState;
  ("All");

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
