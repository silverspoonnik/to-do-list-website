import React from 'react'
import Todocard from './todocard'

export default function Todolist({todos,handleDeleteTodo,handleEditTodo}) {
 
  return(
    <ul className='main'>
    {todos.map((todo,todoindex)=>(
      <Todocard {...{todos,handleDeleteTodo,handleEditTodo}} key={todoindex} index={todoindex} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}>
        <p>{todo}</p>
      </Todocard>
    ))}
    </ul>
  )
}
