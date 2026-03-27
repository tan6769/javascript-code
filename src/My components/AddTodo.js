import React, { useState } from 'react';

export const AddTodos = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = () => {

    }
    return (
        <div className="container my-3">
            <h3>add a todos</h3>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="title" class="form-label">Todo Title</label>
                    <input type="text" value={title} class="form-control" id="title"
                        aria-describedby="emailHelp" />


                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">Todo Descrption</label>
                    <input type="text" value={desc} class="form-control" id="title" aria-describedby="emailHelp" />

                </div>

                <button type="submit" class="btn btn-sm btn-success">Add Todos</button>
            </form>
        </div>
    )
}