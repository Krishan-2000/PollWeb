import React from 'react'
import './InputOption.css'
// import { InputContext } from './ContextApi/InputContext';

const InputOption = (props) =>{

     return (
        <div className="InputOption">
        <input type="text" value={props.value} placeholder={`Enter Your Option ${props.id+1}`} onChange={(event)=>(props.onChange(props.id,event.target.value))}></input>
        <button onClick={(event) =>{
            event.preventDefault();
            props.onDelete(props.id);
        }}>Delete</button>
        </div>
    )
};

export default InputOption;