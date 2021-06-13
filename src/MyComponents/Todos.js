import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length===0? "No Todos remaining, Hurray you have completed all ":  
            props.todos.map((todo)=>{
                return (<TodoItem todo={todo} key={todo.serial_number} onDelete={props.onDelete}/>   
                )
            })
              } 
        </div>
    )
}
 export default Todos