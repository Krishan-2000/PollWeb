import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Option from './Option'
import Button from './Button'
// import './Body.css'
import './Poll.css'
import { OptionPollContext } from './ContextApi/OptionPollContext'
const Poll = () =>{

   const params = useParams();
   const[dataoption,setdataoption]=useState({});
   const[array,setarray]=useState([]);
   const [ans,setans]=useContext(OptionPollContext);

   const callOptionPage = async ()=>{
     try{
       const res = await fetch(`/api/poll/get_poll/${params._id}`,{
         method : "GET",
         headers:{
           Accept : "application/json",
           "Content-Type": "application/json"
         },
         credentials: "include",
       });
       const data = await res.json();
       setarray(data.option)
       setdataoption(data);
       if(!res.status===200){
         const error = new Error(res.error);
         throw error;
       }
     }
     catch(err){
       console.log(err);
     }
  }

  const optionSubmitHandler = () =>{
      localStorage.setItem(params._id,ans);
  }

    useEffect(()=>{
       callOptionPage();
    },[]);
    return(
      <div className="polldata">
        <h3 className="pollquestion">{dataoption.question}</h3>
        {
           array.map((value)=>{
              return(<Option mainId={dataoption._id} value={value} key={value._id}/>);
           })
        }
        <Button className="GeneratePollButton1" onClick={optionSubmitHandler}>Submit Option</Button>
        
      </div>
    )
}

export default Poll