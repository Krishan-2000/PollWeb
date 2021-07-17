import { useState, createContext } from 'react'
import React from 'react'

export const InputContext = createContext();

export const InputProvider = (props) =>{

    const [inputfield, setInputfield] = useState([{text : "", vote : 0}, {text: "" , vote : 0}]);

    return (
       <InputContext.Provider value={[inputfield,setInputfield]}>{props.children}</InputContext.Provider>
    );

}