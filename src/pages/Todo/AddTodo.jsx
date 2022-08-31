import React, { memo } from 'react'

function AddTodo({ todo, handleChange, handleAddTodo, handleUpdateTodo }) {

    return (
        <div className='row py-4 mx-2'>
            <div className='col-5'>
                <label>Name Task</label>
                <input
                    type="text"
                    className="form-control rounded border-warning"
                    id="nameTask"
                    value={todo.nameTask}
                    onChange={handleChange}
                />
            </div>
            <div className='col-7'>
                <label>Description</label>
                <input
                    type="text"
                    className="form-control rounded border-warning"
                    id="description"
                    value={todo.description}
                    onChange={handleChange}
                />
            </div>
            <div className='col-12'>
                <button
                    className="btn btn-warning mt-4 me-2"
                    disabled={todo.edit ? true : false}
                    onClick={handleAddTodo}
                >Add todo</button>
                <button
                    className="btn btn-warning mt-4"
                    disabled={todo.edit ? false : true}
                    onClick={() => { handleUpdateTodo(todo) }}
                >Update todo</button>

            </div>
        </div>
    )
}

export default memo(AddTodo);