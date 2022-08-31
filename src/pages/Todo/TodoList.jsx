import React, { memo } from 'react'

function TodoList({ listTodo, handleDeleteTodo, handleComplete,handleEdit }) {
    return (
        <div>
            <div style={{ height: '10px', background: '#fff' }} className='w-100'></div>
            <ul className='mx-2' >
                {listTodo.map((todo) => {
                    return <li className="row p-0 m-0 border-bottom" key={todo.id}>
                        <div className="col-10 pt-2">
                            <h4 className='m-0'>{todo.nameTask}</h4>
                            <p className='mb-2'>{todo.description}</p>
                        </div>
                        <div className="col-2 p-0 mt-3">
                            <button
                                className={todo.isCheckedComplete ? 'me-2 btn-success border-0' : 'me-2 border-0'}
                                onClick={() => {
                                    handleComplete(todo.id, todo.isCheckedComplete);
                                }}>
                                <i className="fas fa-check"></i>
                            </button>

                            <button
                                className='text-dark me-2 border-0'
                                onClick={() => {
                                    handleEdit(todo.id);
                                }}>
                                <i className="fas fa-edit "></i>
                            </button>

                            <button
                                className="text-danger  border-0"
                                onClick={() => {
                                    handleDeleteTodo(todo.id)
                                }}>
                                <i className="fas fa-calendar-times"></i>
                            </button>

                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}
//kh render lai khi kh co props truyen vao hoacj props kh lamf thay doi giao dien 
export default memo(TodoList);