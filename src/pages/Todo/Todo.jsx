import React, { useCallback, useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid';

import AddTodo from './AddTodo'
import TodoList from './TodoList'

export default function Todo() {
    const [todo, setTodo] = useState({
        id: 0,
        'nameTask': '',
        'description': '',
        isCheckedComplete: false,
        edit: false
    });
    const [listTodo, setListTodo] = useState([]);
    //useCallback  ham handleChange va handleAddTodo duoc goi khi todo co su thay doi
    const handleChange = useCallback((e) => {
        if (!todo.edit) {
            let { id, value } = e.target;
            const unique_id = uuid().slice(0, 8);
            let todoNew = { ...todo, id: unique_id };
            todoNew[id] = value;
            setTodo(todoNew);
        } else {
            let { id, value } = e.target;
            let todoNew = { ...todo };
            todoNew[id] = value;
            setTodo(todoNew);
        }
    }, [todo]);

    const handleAddTodo = useCallback(() => {
        let listTodoNew = [...listTodo];
        if (todo.description === '' || todo.nameTask === '') return;
        listTodoNew.push(todo);
        setListTodo(listTodoNew);
        setTodo(
            {
                id: 1,
                isCheckedComplete: false,
                'nameTask': '',
                'description': '',
            }
        )
    }, [todo]);

    const handleDeleteTodo = (id) => {
        let listTodoNew = [...listTodo].filter((item) => item.id !== id);
        setListTodo(listTodoNew);
    };

    const handleComplete = (id, isCheckedComplete) => {
        let listTodoUpdate = [...listTodo];
        let todoComplete = listTodoUpdate.find((item) => item.id === id);
        if (todoComplete) {
            if (!isCheckedComplete) {
                todoComplete.isCheckedComplete = true
            } else {
                todoComplete.isCheckedComplete = false;
            }
        }

        setListTodo(listTodoUpdate);

    };


    const handleEdit = (id) => {
        let todoEdit = listTodo.find((todo) => todo.id == id);
        todoEdit.edit = true;
        setTodo(todoEdit);
    }

    const handleUpdateTodo = (todo) => {
        let listTodoUpdate = [...listTodo];
        let todoUpdate = listTodoUpdate.find((item) => item.id === todo.id);
        todoUpdate.nameTask = todo.nameTask;
        todoUpdate.description = todo.description;
        setListTodo(listTodoUpdate)
        setTodo(
            {
                id: 1,
                isCheckedComplete: false,
                'nameTask': '',
                'description': '',
            }
        )
    }

    const saveLocalStorage = () => {
        let listTodoLocal = JSON.stringify([...listTodo]);
        localStorage.setItem('listTodo', listTodoLocal);
    }

    const getLocalStorage = () => {
        if (localStorage.getItem('listTodo')) {
            let listTodoNew = [...listTodo];
            listTodoNew = JSON.parse(localStorage.getItem('listTodo'));
            setListTodo(listTodoNew);
        }
    }

    //goi laij 1 lan duy nhat
    useEffect(() => {
        getLocalStorage()
    }, []);

    //goi lai khi listTodo thay doi de luu vao LocalStorage
    useEffect(() => {
        saveLocalStorage()
    }, [listTodo]);

    return (
        <div className='container pt-2 mt-4' style={{ width: '700px', height: '600px', boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.75)' }}>
            <div className='bg-light rounded' >
                <AddTodo
                    todo={todo}
                    handleChange={handleChange}
                    handleAddTodo={handleAddTodo}
                    handleUpdateTodo={handleUpdateTodo}
                />
                <TodoList
                    listTodo={listTodo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleComplete={handleComplete}
                    handleEdit={handleEdit}
                />
            </div>
        </div>
    )
}
