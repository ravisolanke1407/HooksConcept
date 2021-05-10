import React,{useContext} from 'react'
import { ProductContext } from '../Context/ProductContext'

function D() {
    const [products, setProducts] = useContext(ProductContext)
    return (
        <div>
            <h2>Component D</h2>
            {products.map((item,idx)=>(
                <p key={idx}>{item.name +" - quantity :"+ item.quantity}</p>
            ))}
            
        </div>
    )
}

export default D


// {
//     //Test 1

// import React from 'react'
// import { useState } from 'react'

// function Test() {
//     const [counterOne, setCounterOne] = useState(0)
//     const [counterTwo, setCounterTwo] = useState(0)

//     const isEven =()=>{
//         let i=0
//         while(i < 500000000) i++
//         return counterOne % 2 === 0
//     }

//     return (
//         <div style={{display:'grid',placeItems:'center'}}>
//             <div>
//             <button onClick={()=>setCounterOne(counterOne+1)}>Counter {counterOne}</button>
//             <p>{isEven() ? "Even" : "Odd"}</p>
//             </div>
//             <div>
//             <button onClick={()=>setCounterTwo(counterTwo+1)}>Counter {counterTwo}</button>
//             </div>
//         </div>
//     )
// }

// export default Test

// ==========================================================================================
// //Test 2

// APP.js  <parent/>

// import React,{useState} from 'react'
// import Button from './Button'
// import Count from './Count'
// import Title from './Title'

// export default function Parent() {
//     const [age, setAge] = useState(25)
//     const [salary, setSalary] = useState(25000)
//     const incrementCount =()=>{ setAge(age+1) }
//     const incrementSalary=()=>{ setSalary(salary+1000)}
    
//     return (
//         <div style={{display:'grid',placeItems:'center'}}>
//         <Title/>
//         <Count text="age" count={age}/>
//         <Button handleClick={incrementCount}>Increment Age</Button>
//         <Count text="salary" count={salary}/>
//         <Button handleClick={incrementSalary}>Increment Salary</Button>
//         </div>
//     )
// }

// //Title
// import React from 'react'

//  function Title() {
//     console.log("rendered Title")
//     return (
//         <div>
//             <h4>Test 2</h4>
//         </div>
//     )
// }

// export default Title
// ===============================================
// //Count
// import React from 'react'

// const Count=({text,count})=> {
//     console.log("rendered",text)
//     return (
//         <div>
//             <h5>{text} - {count}</h5>
//         </div>
//     )
// }

// export default  Count
// ===================================================

// //Button
// import React from 'react'

//  const Button=({handleClick,children})=> {
//      console.log("Rendering Button",children)
//     return (
//         <div>
//             <button onClick={handleClick}>{children}</button>
//         </div>
//     )
// }

// export default Button

// }