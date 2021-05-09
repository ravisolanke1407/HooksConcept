import React, { memo } from 'react'

const Count=({text,count})=> {
    console.log("rendered",text)
    return (
        <div>
            <h5>{text} - {count}</h5>
        </div>
    )
}

export default  memo(Count)