import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
   const addNum = ()=>{
    if (counter<15) {
      setCounter(counter+1)
      console.log(counter)
    }else{
      console.log(`Counter reach higest value`);
      
    }
   }
   const removeNum = ()=>{
    if (counter>0 ) {
      setCounter(counter -1)
      console.log(counter)
    }else{
      console.log(`Counter reach Lowest value`)
    }
   }
  return (
   <>
   <h1>Set Counter</h1>

   <button onClick={addNum}>Add Count {counter}</button>
    <br />
   <button onClick={removeNum}>Remove Count {counter}</button>
   </>
  )
} 

export default App
