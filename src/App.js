import './App.css';
import Header from "./My components/Header";
import { Todos } from "./My components/Todos";
import { Footer } from "./My components/Footer";
import { AddTodos } from "./My components/AddTodo";
import React, { useState } from 'react';


function App() {
  const onDelete = () => {
    console.log("I am onDelete of todos", todos);
    //Deleting thi way in react does not work
   // let index = todos.indexOf(todos);
    //todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e!==todos;

    }));
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the market to get this job done2"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go to the market to get this job done3"
    }

  ]);
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />

    </>
  );



}

export default App;
