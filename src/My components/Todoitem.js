import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
            <h4>{TodoItem.title}</h4>
            <p>{TodoItem.desc}</p>
            <button classname="btn btn-sm btn-danger" onClick={onDelete}>Delete</button>
        </div>
    )
} 


