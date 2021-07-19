import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ResultOption from './ResultOption'
import './ResultOption.css'

const ResultPage = () => {

  const params = useParams();
  const [dataoption, setdataoption] = useState('');
  const [array, setarray] = useState([]);

  const callResultPage = async () => {

    try {
      const res = await fetch(`/api/poll/result/${params._id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include",
      });
      const data = await res.json();
      setarray(data.option);
      setdataoption(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    }
    catch (err) {
      console.log("hi");
      console.log(err);
    }

  }

  useEffect(() => {
    callResultPage();
  }, []);
  console.log(array);
  return (
    <div>
      <div className="polldata1">
        <h3 className="pollquestion1">{dataoption.question}</h3>
        
        {
          array.map((value) => {
            return (<ResultOption key={value._id} value={value}/>);
          })
        }

      </div>
    </div>
  )
}

export default ResultPage