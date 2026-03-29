import React from 'react'
import { TodoItem } from "./Todoitem";

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-centre">Todos List</h3>
            {props.todos.length === 0 ? "No Todos to display" :
                props.todos.map((todos) => {
                    return <TodoItem todo={todos} onDelete={props.onDelete} />
                })
            }

        </div>
    )
}
