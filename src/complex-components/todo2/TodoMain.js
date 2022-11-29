import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoMidlayer'

import { v4 as uuidv4 } from 'uuid';


export default function TodoMultiLayer() {

    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef();

    const LOCAL_STOREAGE_KEY = 'todoApp.todos';

    useEffect(() => {
        const storedTodos = JSON.parse(
            localStorage.getItem(LOCAL_STOREAGE_KEY)
        );
        if (storedTodos) setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STOREAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function toggleTodo(id) {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }

    function handleAddTodo(e) {
        const name = todoNameRef.current.value;
        if (name === '') return;
        setTodos((prevTodos) => {
            return [
                ...prevTodos,
                { id: uuidv4(), name: name, complete: false }
            ];
        });
        todoNameRef.current.value = null;
    }

    function handleClearTodos() {
        const newTodos = todos.filter((todo) => !todo.complete);
        setTodos(newTodos);
    }

    
    return (
        <section>
            <h2>Todo list multi-component</h2>
            <div className="todo-container">
                <TodoList todos={todos} toggleTodo={toggleTodo} />
                <input type="text" ref={todoNameRef} placeholder="add item here..."/>
                <button onClick={handleAddTodo}>Add Todo</button>
                <button onClick={handleClearTodos}>
                    Clear Completed Todos
                </button>
                <div>
                    {todos.filter((todo) => !todo.complete).length} left todo
                </div>
            </div>
        </section>
    );
}
