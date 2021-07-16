import { useState, createContext } from 'react'
import React from 'react'

export const InputContext = createContext();

export const InputProvider = (props) =>{

    const [inputfield, setInputfield] = useState([{text : "" , id: Math.random()}, {text: "", id: Math.random()}]);

    return (
       <InputContext.Provider value={[inputfield,setInputfield]}>{props.children}</InputContext.Provider>
    );

}