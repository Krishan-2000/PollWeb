import React, { useContext, useState } from 'react'
import './Body.css'
import InputQuestion from './InputQuestion'
import InputOption from './InputOption'
import Button from './Button'
import { InputContext } from './ContextApi/InputContext'
// import { InputProvider } from './ContextApi/InputContext'

const Body = () =>{

    const [inputfield,setInputfield] = useContext(InputContext);
    const [count,setCount] = useState(3);
    const [inputquestion,setquestion] = useState("");

    const onsubmithandler = (event) =>{
        event.preventDefault();
        setCount(prev =>prev+1);
        setInputfield(()=>{
            return [...inputfield, {id : count,text : ""}];
        })
    }
    
    const onsubmitdatahandler = (event) =>{
        event.preventDefault();
        console.log(inputquestion);
        console.log(inputfield);
    }

    const onChangeHandler = (val) =>{
         setquestion(val);
    }

    const onChangeHandlerOption = (id,val) =>{
        let obj= inputfield.find(o => o.id===id);
        obj.text=val;
        setInputfield(inputfield);
    }

    return (
         <div className="Body">
            <div>
              <h2>Create Poll</h2>
              <p>Complete Below Field to create a Poll</p>
              <p>Poll Question</p>
            <form >
               <InputQuestion onChange={onChangeHandler}/>
               {inputfield.map((val)=>(
                   <>
                   <h2 key={Date.now()}>Option {val.id}</h2>
                   <InputOption key={val.id} id={val.id} onChange={onChangeHandlerOption}/>
                   </>
               ))}
               <Button onClick={onsubmithandler}>Add Option</Button>
               <Button onClick={onsubmitdatahandler}>Create Your Poll</Button>
            </form>
            </div>
        </div>
    )
}

export default Body;