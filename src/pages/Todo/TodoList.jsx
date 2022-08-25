import React, { memo } from 'react'

function TodoList({ list, handleDeleteTodo,handleComplete }) {
    return (
        <div>
            <div style={{ height: '10px', background: '#fff' }} className='w-100'></div>
            <ul className='mx-2' >
                {list.map((item) => {
                    return <li className="row p-0 m-0 border-bottom" key={item.id}>
                        <div className="col-8 p-0">
                            <h4>{item.nameTask}</h4>
                            <p>{item.description}</p>
                        </div>
                        <div className="col-4 p-0 mt-4">
                            <button className={item.isChecked ? 'btn me-2 btn-success' : 'btn me-2'}
                                onClick={() => {
                                    handleComplete(item.id,item.isChecked);
                                }}>Complete</button>
                            <button className="btn btn-danger"
                                onClick={() => {
                                    handleDeleteTodo(item.id)
                                }}>Delete</button>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default memo(TodoList);