import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {
  return (
    <div className='text-center'>Todos
        <h2>
            {props.todos.map((i)=>{
                return(
                    <TodoItem todo={i} ondelete={props.ondelete}/>
                )
            })}
            
        </h2>
    </div>

  )
}

export default Todos