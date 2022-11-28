import React from 'react'

export default function TodoList1({ todo }) {
    const { id, title, completed } = todo
    const p = <p>{title}</p>
    const text = completed ? <strike>{p}</strike> : p
    


  return (
    <div data-testid={`todo-${id}`}>{ text }</div>
  )
}
