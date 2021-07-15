import React from 'react'
import './InputQuestion.css'



const InputQuestion = (props) =>{
    return (
        <div className="InputQuestion">
            <input type="text" placeholder="Enter Your Question" onChange={(event)=>(props.onChange(event.target.value))}></input>
        </div>
    )
};

export default InputQuestion;