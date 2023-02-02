import React,{useState,useRef} from 'react'
import User from './User'
const Input = () => {
    const [text,setText] = useState('')
    const inputRef = useRef()
    const showText = () =>{
      setText(inputRef.current.value)
      inputRef.current.value = '';
    }
    
    return (
      <div className="App">
        <h1>Lista</h1>
        <input type='text' ref={inputRef}></input>
        <button onClick={showText}>bam</button>
        <h2>Search User!</h2>
        <User input={text}/>
        
      </div>
    );
}

export default Input
