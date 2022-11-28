import React from 'react'
import Todo1 from './Todo1'

export default function TodoList1() {
    const todos = [
      {id: 1, title: 'todo task 1', completed: false},
      {id: 2, title: 'todo task 2', completed: false},
      {id: 3, title: 'task 3', completed: true}
    ]

  return (
    <>
      <div>
        <h3>Item todo list</h3>
      </div>
      { todos.map((todo) => {
        return (<Todo1  key={todo.id} todo={todo}/>)
      })}
    </>
  )
}
