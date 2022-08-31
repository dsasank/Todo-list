import React, { useState } from 'react'
import "./Project.css"
import Prodre from './Prodre'
function Practise() {
  const [before,setBefore]=useState("")
  const tex=(i)=>{
      setBefore(i.target.value)
  }
  const [old,setOld]=useState([])
  const adding=()=>{
    if (before ==""){
      alert("please enter a todo")
    }
    else{
      setOld([...old,before])
      setBefore("")
    }
  }
const deleteitem=(index)=>{
  let x=old
  x.splice(index,1)
  setOld([...x])
}
  return (
    <>
    <div style={{textAlign:'center'}}>
          <div style={{backgroundColor:'lightblue',height:"200px"}}>
          <h1 style={{textAlign:'center'}}>Todos List</h1> 
          <div>
          <input type="text" value={before} onChange={tex}></input>
        <button className='btn btn-primary' style={{marginLeft:"50px"}} onClick={adding}>add to list</button> 
          </div>      
          </div>
        </div>
        <ol>
            {old.map((item,index)=>{
              return ([
                <h3 key={index} id={index} >{item} <button onClick={()=>deleteitem(index)} key={index} id={index} className='btn btn-danger'>delete</button></h3>
              ])
            })}
          </ol>
        </>
          )
}
export default Practise