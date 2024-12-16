// import { Header } from "./components/Header";
// import { Tabs } from "./components/Tabs";
// import { TodoInput } from "./components/TodoInput";
// import { TodoList } from "./components/TodoList";

// import { useState, useEffect } from "react";

// function App() {
//   // const todos = [
//   // { input: 'Hello! Add your first todo!', complete: true },
//   // { input: 'Get the groceries!', complete: false },
//   // { input: 'Learn how to web design', complete: false },
//   // { input: 'Say hi to gran gran', complete: true },
//   // ]

//   const [todos, setTodos] = useState([
//     { input: "Hello! Add your first todo!", complete: true },
//   ]);
//   const [selectedTab, setSelectedTab] = useState("Open");
//   const [inputValue, setInputValue] = useState("");

//   function handleAddTodo(newTodo) {
//     const newTodoList = [...todos, { input: newTodo, complete: false }];
//     setTodos(newTodoList);
//     handleSaveData(newTodoList);
//   }

//   function handleCompleteTodo(index) {
//     // update/edit/modify
//     const newTodoList = [...todos];
//     const completedTodo = todos[index];
//     completedTodo["complete"] = true;
//     newTodoList[index] = completedTodo;
//     setTodos(newTodoList);
//     handleSaveData(newTodoList);
//   }

//   function handleEditTodo(index) {
//     const newa = [...todos];
//     const v = newa[index];
//     setInputValue(v.input);
//     const fil = newa.filter((_, todoindex) => todoIndex !== index);
//     setTodos(fil);
//     handleSaveData(fil);
//     // step 1 - create a duplicate array
//     // step 2 - create a new variable and assign the current value of the todo that needs editing to it
//     // step 3 - set the input value equal to the current value of the todo in question
//     // step 4 - copy the delete functionality and filter out the todo @ index from the duplicate array
//     // step 5 - set the todo state equal to the filtered duplicate array
//     // step 6 - now the user can edit the todo and re-add it when satisfied
//   }

//   function handleDeleteTodo(index) {
//     let newTodoList = todos.filter((val, valIndex) => {
//       return valIndex !== index;
//     });
//     setTodos(newTodoList);
//     handleSaveData(newTodoList);
//   }

//   function handleSaveData(currTodos) {
//     localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
//   }

//   useEffect(() => {
//     if (!localStorage || !localStorage.getItem("todo-app")) {
//       return;
//     }
//     let db = JSON.parse(localStorage.getItem("todo-app"));
//     setTodos(db.todos);
//   }, []);

//   return (
//     <>
//       <Header todos={todos} />
//       <Tabs
//         selectedTab={selectedTab}
//         setSelectedTab={setSelectedTab}
//         todos={todos}
//       />
//       <TodoList
//         handleCompleteTodo={handleCompleteTodo}
//         handleDeleteTodo={handleDeleteTodo}
//         selectedTab={selectedTab}
//         todos={todos}
//         handleEditTodo={handleEditTodo}
//       />
//       <TodoInput
//         handleAddTodo={handleAddTodo}
//         inputValue={inputValue}
//         setInputValue={setInputValue}
//       />
//     </>
//   );
// }

// export default App;

import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);
  const [selectedTab, setSelectedTab] = useState("Open");
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function handleAddTodo(newTodo) {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos.splice(editIndex, 0, { input: newTodo, complete: false });
      setTodos(updatedTodos);
      handleSaveData(updatedTodos);
      setEditIndex(null);
    } else {
      const newTodoList = [...todos, { input: newTodo, complete: false }];
      setTodos(newTodoList);
      handleSaveData(newTodoList);
    }
    setInputValue("");
  }

  function handleCompleteTodo(index) {
    const newTodoList = [...todos];
    newTodoList[index].complete = true;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleEditTodo(index) {
    const todoToEdit = todos[index];
    setInputValue(todoToEdit.input);
    setEditIndex(index);

    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
    handleSaveData(updatedTodos);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, valIndex) => valIndex !== index);
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    const db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        selectedTab={selectedTab}
        todos={todos}
      />
      <TodoInput
        handleAddTodo={handleAddTodo}
        inputValue={inputValue}
        setInputValue={setInputValue}
        isEditing={editIndex !== null}
      />
    </>
  );
}

export default App;
