import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, edit, remove } from './Store/Slice/todoSlice'

function App() {
  const dispatch=useDispatch()
  const todos=useSelector((state)=>state.todoapp.value)
  const [text,setText]=useState("")

  const handleSubmit=()=>{
    if(text.trim()===""){
      return;
    }dispatch(add(text))
    setText("")
  }

  return (
    <div>
      <h1>ToDo App</h1>
      <input type="text"
      value={text}
      placeholder='Enter Here'
      onChange={(e)=>setText(e.target.value)}
      />
      <button onClick={(handleSubmit)}>Add</button>

      <ul>
        {todos.map((n)=>(
          <li key={n.id}>
            {n.text}
            <button onClick={()=>dispatch(remove(n.id))}>Delete</button>
            <button onClick={()=>{
              const newText=prompt('enter here')
              if(newText){
                dispatch(edit({id:n.id,text:n.newText}))
              }
            }}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
