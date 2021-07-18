import './Poll.css'
import React, { useContext, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { OptionPollContext } from './ContextApi/OptionPollContext';

const Option = (props) =>{
    
    const[ans,setans]= useContext(OptionPollContext);
    const params= useParams();
    console.log(params._id);
    const divref=useRef();
    const clickOption = ()=>{
        divref.current.style.boxShadow="0 4px 8px 0  #24E843, 0 6px 20px 0 #8CFF9E";
        console.log(divref.current.attributes.d.value);
        setans(divref.current.attributes.d.value);
    }

    return (
        <div className="polloption" >
        <div ref={divref} onClick={clickOption} d={props.value._id} className="polloptiondata" >
          <p onClick={clickOption}>{props.value.text}</p>
        </div>
     </div>
    )
}

export default Option