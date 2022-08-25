import React from 'react'

export default function AddTodo({todo, handleChange ,handleAddTodo}) {
    return (
        <div className='row py-4 mx-2'>
            <div className='col-4'>
                <label>Name Task</label>
                <input
                    type="text"
                    className="form-control rounded border-warning"
                    id="nameTask"
                    value={todo.nameTask}
                    onChange={handleChange}
                />
            </div>
            <div className='col-5'>
                <label>Description</label>
                <input
                    type="text"
                    className="form-control rounded border-warning"
                    id="description"
                    value={todo.description}
                    onChange={handleChange}
                />
            </div>
            <div className='col-3'>
                <button 
                className="btn btn-warning mt-4"
                onClick={()=>{handleAddTodo()}}
                >Add Todo</button>
            </div>
        </div>
    )
}
