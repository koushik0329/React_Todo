import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Tabs } from "./componenets/Tabs";
import { Header } from "./componenets/Header";
import { TodoInput } from "./componenets/TodoInput";
import { TodoList } from "./componenets/TodoList";

function App() {
  const [todo, setTodo] = useState([{ input: "Add", complete: true }]);

  const [selectedtab, setselectedtab] = useState("All");

  function addtodo(newtodo) {
    const newList = [...todo, { input: newtodo, complete: false }];
    setTodo(newList);
    handleSaveData(newList);
  }

  // function completetodo(index) {
  //   const l = [...todo];
  //   const c = l[index];
  //   c["complete"] = true;
  //   l[index] = c;
  //   setTodo(l);
  //   handleSaveData(l);
  // }

  function completetodo(index) {
    const l = [...todo];

    // Validate the index
    if (index >= 0 && index < l.length) {
      const c = l[index];
      c["complete"] = true;
      l[index] = c;
      setTodo(l);
      handleSaveData(l);
    } else {
      console.error("Invalid index provided to completetodo:", index);
    }
  }

  function deletetodo(index) {
    let newlist = todo.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodo(newlist);
    handleSaveData(newlist);
  }

  function handleSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todo: currTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodo(db.todo);
  }, []);

  return (
    <>
      <Header todo={todo}></Header>
      <Tabs
        todo={todo}
        selectedtab={selectedtab}
        setselectedtab={setselectedtab}
      ></Tabs>
      <TodoInput addtodo={addtodo}></TodoInput>
      <TodoList
        todo={todo}
        deleteTodo={deletetodo}
        handleCompleteTodo={completetodo}
        selectedtab={selectedtab}
      ></TodoList>
    </>
  );
}

export default App;
