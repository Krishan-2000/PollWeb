import { createContext, useState } from 'react'
import React from 'react'

export const OptionPollContext = createContext();

export const OptionPollContextProvider = (props) =>{
   const [ans,setans] = useState('');

   return (
       <OptionPollContext.Provider value={[ans,setans]}>{props.children}</OptionPollContext.Provider>
   )

}