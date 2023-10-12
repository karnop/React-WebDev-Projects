import { useState } from "react";

function App() {

  // js code
  let [counter, setCounter] = useState(0);
  // let counter = 0 ;

  const addValue = () => 
  {
    console.log("Value added", Math.random());
    setCounter(++counter);
  }

  const decValue = () => 
  {
    console.log("Value decreased", Math.random());
    setCounter(--counter);
  }

  // jsx code
  return (
    <>
      <h1>Reach Tut</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value</button> <br />
      <button onClick={decValue}>Decrease value</button>
    </>
  )
}

export default App
