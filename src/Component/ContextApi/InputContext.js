import { useState, createContext } from 'react'
import React from 'react'

export const InputContext = createContext();

export const InputProvider = (props) =>{

    const [inputfield, setInputfield] = useState([{id : 1, text : ""}, {id : 2, text: ""}]);

    return (
       <InputContext.Provider value={[inputfield,setInputfield]}>{props.children}</InputContext.Provider>
    );

}