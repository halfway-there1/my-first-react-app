import { useState } from 'react'
import './App.css'

function App() {
  console.log('App render')
  
  return (
    <>
      <CountingButton val={21}/>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </>
  )
}

function CountingButton({val = 0}) {
  const [count, setCount] = useState(val);
  
  function handleClick() {
    setCount(count+1);
    console.log('the control does reach here 1 and the count is', count);
  }
  
  return (
      <button onClick={handleClick}>{count}</button>
  )
}

export default App;
