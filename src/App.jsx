import { useState } from 'react'

function App() {
  //initial state was set to black
  const [color, setcolor] = useState("black")

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center' style={{ backgroundColor: color }}></div>

      <div className='fixed flex justify-center items-center bottom-1/2 w-full inset-x-0  px-2'>
        <div className='flex flex-wrap justify-center gap-4 shadow-xl px-3 py-3 rounded-3xl bg-gray-50'>
        //we used this type of expression on onclick because onclick exprects a function but when we pass a function with arguments it returns some value which we dont want so we used arrow function to return the value  
        <button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={(set)=>setcolor("red")} style={{backgroundColor:"red"}}>RED</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={(set)=>setcolor("green")} style={{backgroundColor:"green"}}>GREEN</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={(set)=>setcolor("blue")} style={{backgroundColor:"blue"}}>BLUE</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={(set)=>setcolor("purple")} style={{backgroundColor:"purple"}}>PURPLE</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={(set)=>setcolor("white")} style={{backgroundColor:"white"}}>WHITE</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={(set)=>setcolor("yellow")} style={{backgroundColor:"yellow"}}>YELLOW</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={(set)=>setcolor("orange")} style={{backgroundColor:"orange"}}>ORANGE</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={(set)=>setcolor("pink")} style={{backgroundColor:"pink"}}>PINK</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={(set)=>setcolor("lavender")} style={{backgroundColor:"lavender"}}>LAVENDER</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={(set)=>setcolor("black")} style={{backgroundColor:"black", color:"white"}}>BLACK</button>
        </div>
      </div>
    </>
  )
}

export default App
