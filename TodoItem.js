import React from 'react'

function TodoItem({todo, ondelete}) {
  return (
    <div className='container'>
        <h4>{todo.title}</h4>
        <button className='btn btn-sm btn-danger' onClick={()=>ondelete(todo)}>delete</button>
    </div>
  )
}

export default TodoItem