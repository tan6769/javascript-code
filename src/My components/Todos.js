import React from 'react'
import { TodoItem } from "./Todoitem";

export const Todos = (props) => {
    return (
        <div class name="container">
            <h3 classname="text-centre my-3">Todos list</h3>
            {props.todos.map((todo) => {
                return <TodoItem todo={todo} onDelete={props.onDelete} />
            })}
            
        </div>
    )
}