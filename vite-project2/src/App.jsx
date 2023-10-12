import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("white"); 

  return (
    <>
      <div className='w-full h-screen duration-1000' style={{backgroundColor: color}}>
    
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
        <button  onClick={() => setColor("#51e2f5") } className='outline-none px-4 font-bold py-1 rounded-full text-black shadow-xl ' style={{backgroundColor : "#51e2f5"}}> Bright Blue </button>
        <button  onClick={() => setColor("#9df9ef") } className='outline-none px-4 font-bold py-1 rounded-full text-black shadow-xl ' style={{backgroundColor : "#9df9ef"}}>Blue Green</button>
        <button  onClick={() => setColor("#edf756") } className='outline-none px-4 font-bold py-1 rounded-full text-black shadow-xl ' style={{backgroundColor : "#edf756"}}>Dusty White</button>
        <button  onClick={() => setColor("#ffa8B6") } className='outline-none px-4 font-bold py-1 rounded-full text-black shadow-xl ' style={{backgroundColor : "#ffa8B6"}}>Pink Sand</button>
        <button  onClick={() => setColor("#a28089") } className='outline-none px-4 font-bold py-1 rounded-full text-black shadow-xl ' style={{backgroundColor : "#a28089"}}>Dark Sand</button>
        <button  onClick={() => setColor("#a0d2eb") } className='outline-none px-4 font-bold py-1 rounded-full text-black shadow-xl ' style={{backgroundColor : "#a0d2eb"}}>Ice Cold</button>
        <button  onClick={() => setColor("#e5eaf5") } className='outline-none px-4 font-bold py-1 rounded-full text-black shadow-xl ' style={{backgroundColor : "#e5eaf5"}}>Freeze Purple</button>
        <button  onClick={() => setColor("#d0bdf4") } className='outline-none px-4 font-bold py-1 rounded-full text-black shadow-xl ' style={{backgroundColor : "#d0bdf4"}}>Medium Purple</button>
        <button  onClick={() => setColor("#8458B3") } className='outline-none px-4 font-bold py-1 rounded-full text-black shadow-xl ' style={{backgroundColor : "#8458B3"}}>Purple Pain</button>
        <button  onClick={() => setColor("#000000") } className='outline-none px-4 font-bold py-1 rounded-full text-white shadow-xl ' style={{backgroundColor : "#000000"}}>Black</button>
        <button  onClick={() => setColor("#FFFFFF") } className='outline-none px-4 font-bold py-1 rounded-full text-black shadow-xl ' style={{backgroundColor : "#FFFFFF"}}>White</button>
        </div>
      </div>
      

      </div>
    </>
  )
}

export default App
