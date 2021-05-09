import React,{useState,useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

export default function Parent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(25000)
    const incrementCount =useCallback(()=>{ setAge(age+1) },[age])
    const incrementSalary=useCallback(()=>{ setSalary(salary+1000)},[salary])
    
    return (
        <div style={{display:'grid',placeItems:'center'}}>
        <Title/>
        <Count text="age" count={age}/>
        <Button handleClick={incrementCount}>Increment Age</Button>
        <Count text="salary" count={salary}/>
        <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}
