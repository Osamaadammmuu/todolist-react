import React, { useState, useEffect } from "react";
import Form from "./components/Form.js";
import Todolist from "./components/Todolist.js";
function App() {
  // state
  const [inputTxt, setInputTxt] = useState();
  const [todos, settodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
  // useEffect;
  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    console.log("you are effect me");
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // filter
  const filterHandler = () => {
    console.log("hello from function");
    switch (status) {
      case "Completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  // save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      settodos(todoLocal);
    }
  };

  return (
    <div className="main">
      <header className="header">
        <h1>Todo List</h1>
      </header>
      <Form
        setStatus={setStatus}
        setInputTxt={setInputTxt}
        todos={todos}
        settodos={settodos}
        inputTxt={inputTxt}
      />
      <Todolist filterTodos={filterTodos} todos={todos} settodos={settodos} />
    </div>
  );
}

export default App;
