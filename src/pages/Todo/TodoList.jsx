import React, { memo } from 'react'

function TodoList({ listTodo, handleDeleteTodo,handleComplete }) {
    return (
        <div>
            <div style={{ height: '10px', background: '#fff' }} className='w-100'></div>
            <ul className='mx-2' >
                {listTodo.map((todo) => {
                    return <li className="row p-0 m-0 border-bottom" key={todo.id}>
                        <div className="col-8 p-0">
                            <h4>{todo.nameTask}</h4>
                            <p>{todo.description}</p>
                        </div>
                        <div className="col-4 p-0 mt-4">
                            <button className={todo.isChecked ? 'btn me-2 btn-success' : 'btn me-2'}
                                onClick={() => {
                                    handleComplete(todo.id,todo.isChecked);
                                }}>Complete</button>
                            <button className="btn btn-danger"
                                onClick={() => {
                                    handleDeleteTodo(todo.id)
                                }}>Delete</button>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}
//kh render lai khi kh co props truyen vao hoacj props kh lamf thay doi giao dien 
export default memo(TodoList);