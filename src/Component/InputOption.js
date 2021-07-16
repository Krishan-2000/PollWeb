import React from 'react'
import './InputOption.css'
// import { InputContext } from './ContextApi/InputContext';

const InputOption = (props) =>{

     return (
        <div className="InputOption">
        <input type="text" value={props.value} placeholder={`Enter Your Option ${props.id+1}`} onChange={(event)=>(props.onChange(props.id,event.target.value))}></input>
        {/* <button onClick={(event) =>{
            event.preventDefault();
            props.onDelete(props.id);
        }}>Delete</button> */}
        <i className="fa fa-trash-o DeleteButton" onClick={(event) =>{
            event.preventDefault();
            props.onDelete(props.id);
        }}></i>
        </div>
    )
};

export default InputOption;