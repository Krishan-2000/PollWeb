import React from 'react'
import './InputOption.css'

const InputOption = (props) =>{
    return (
        <div className="InputOption">
        <input type="text" placeholder={`Enter Your Option ${props.id}`} onChange={(event)=>(props.onChange(props.id,event.target.value))}></input>
        <button type="submit">Delete</button>
        </div>
    )
};

export default InputOption;