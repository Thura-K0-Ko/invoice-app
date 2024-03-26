import React, { useRef } from 'react'

const Test = () => {
    const numRef= useRef(0)
    const handleBtn=() => {
        numRef.current= numRef.current+1
        console.log(numRef.current);
    }
  return (
    <div>
        Num {numRef.current}
        <br />
        <button onClick={handleBtn}>click</button>
    </div>
  )
}

export default Test