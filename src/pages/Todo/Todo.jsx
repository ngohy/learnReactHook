import React, { useCallback, useState } from 'react'
import { v4 as uuid } from 'uuid';

import AddTodo from './AddTodo'
import TodoList from './TodoList'

export default function Todo() {
    const [todo, setTodo] = useState({
        id: 0,
        isChecked: false,
        'nameTask': '',
        'description': '',
    });
    const [list, setList] = useState([]);

    const handleChange = (e) => {
        let { id, value } = e.target;
        const unique_id = uuid().slice(0, 8);
        let todoNew = { ...todo, id: unique_id };
        todoNew[id] = value;
        setTodo(todoNew);
    }


    const handleAddTodo = () => {
        let listNew = [...list];
        listNew.push(todo);
        setList(listNew);
        setTodo(
            {
                id: 1,
                isChecked: false,
                'nameTask': '',
                'description': '',
            }
        )
    }

    const handleDeleteTodo = (id) => {
        let listNew = [...list].filter((item) => item.id !== id);
        setList(listNew);
    }

    const handleComplete = (id, isChecked) => {
        let listUpdate = [...list];
        let todoComplete = listUpdate.find((item) => item.id === id);
        if (todoComplete) {
            if (!isChecked) {
                todoComplete.isChecked = true
            } else {
                todoComplete.isChecked = false;
            }
        }
        setList(listUpdate)
    }


    return (
        <div className='container pt-2 mt-4' style={{ width: '600px', height: '600px', boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.75)' }}>
            <div className='bg-light rounded' >
                <AddTodo
                    todo={todo}
                    handleChange={handleChange}
                    handleAddTodo={handleAddTodo}
                />
                <TodoList
                    list={list}
                    handleDeleteTodo={handleDeleteTodo}
                    handleComplete={handleComplete}
                />
            </div>
        </div>
    )
}
