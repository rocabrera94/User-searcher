import React, {useState} from 'react'
import data from '../data/users.json'
const User = ({input}) => {
    const [results, setResults] = useState([])
  
  const userName = () => {
    const filterData = data.filter(value =>(
        value.name.toLowerCase().includes(input.toLowerCase()) || 
        value.username.toLowerCase().includes(input.toLowerCase) ||
        value.website.toLowerCase().includes(input.toLowerCase())
      ))
    setResults(filterData)
  }
    
  
  return (
    <div>
        <h2>{input}</h2>
        <button onClick={()=> userName()}>clg</button>
        <div>{results.map((value)=>(
            <p key={value.id}>{value.name}</p>))}</div>
    </div>
  )
}

export default User