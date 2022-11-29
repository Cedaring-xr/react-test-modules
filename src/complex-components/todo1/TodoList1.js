import React, { useRef } from 'react'
import Todo1 from './Todo1'

export default function TodoList1() {
    const todos = [
      {id: 1, title: 'todo task 1', completed: false},
      {id: 2, title: 'todo task 2', completed: false},
      {id: 3, title: 'task 3', completed: true}
    ]

    const todoNameRef = useRef()

    function handleAddTodo() {
      console.log('add')
    }

    const handleClearTodos = () => {
      console.log('clear')
    }

  return (
    <section>
      <div>
        <h3>Item Todo list simple version</h3>
      </div>
      <input type="text" ref={todoNameRef} />
                <button onClick={handleAddTodo}>Add Todo</button>
                <button onClick={handleClearTodos}>
                    Clear Completed Todos
                </button>
      { todos.map((todo) => {
        return (<Todo1  key={todo.id} todo={todo}/>)
      })}
    </section>
  )
}
