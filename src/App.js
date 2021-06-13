import './App.css';
import Header from "./MyComponents/Header.js";
import Footer from "./MyComponents/Footer.js";
import Todos from "./MyComponents/Todos.js";
import React, { useState, useEffect } from 'react';
import {AddTodo} from "./MyComponents/AddTodo.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {

  let initTodo;
  
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

const onDelete =(todo)=>{

  setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
  localStorage.getItem("todos");
  localStorage.setItem("todos",JSON.stringify(todos));
}
const addTodo =(title,description)=>{
  let serial_number;
  if(todos.length===0){
    serial_number=1;
  }
  else{
  serial_number=todos[todos.length-1].serial_number+1;
  }
  const mytodo={
    serial_number:serial_number,
    title:title,
    description:description
  }
  setTodos([...todos,mytodo]);
}
const [todos,setTodos]= useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])



  return ( 
    <> 
    <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}
export default App;
