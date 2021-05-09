import React, { useMemo } from 'react'
import { useState } from 'react'

function UseMemo() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const isEven =useMemo(()=>{
        let i=0
        while(i < 500000000) i++
        return counterOne % 2 === 0
    },[counterOne])

    return (
        <div style={{display:'grid',placeItems:'center'}}>
            <p>useMemo Demo</p>
            <div>
            <button onClick={()=>setCounterOne(counterOne+1)}>Counter {counterOne}</button>
            <p>{isEven ? "Even" : "Odd"}</p>
            </div>
            <div>
            <button onClick={()=>setCounterTwo(counterTwo+1)}>Counter {counterTwo}</button>

            </div>
        </div>
    )
}

export default UseMemo
