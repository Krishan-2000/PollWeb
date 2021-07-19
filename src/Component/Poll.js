import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Option from './Option'
import './Option.css'
import Button from './Button'
import './Poll.css'
import { OptionPollContext } from './ContextApi/OptionPollContext'

const Poll = () => {

  const params = useParams();
  const history = useHistory();
  const [dataoption, setdataoption] = useState({});
  const [array, setarray] = useState([]);
  const [ans, setans] = useContext(OptionPollContext);

  const callOptionPage = async () => {
    try {
      const res = await fetch(`/api/poll/get_poll/${params._id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include",
      });
      const data = await res.json();
      setarray(data.option)
      setdataoption(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  const updatevoted = async () => {
    try {
      const request = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      }
      const response = await fetch(`/api/poll/update_vote/${params._id}/${ans}`, request);
      const data = await response.json();
      console.log(data);
    }
    catch (err) {
      console.log(err);
    }
  }

  const optionSubmitHandler = () => {
    updatevoted();
    localStorage.setItem(params._id, ans);
    history.push(`/poll/result/${params._id}`);
  }

  useEffect(() => {
    if (localStorage.getItem(params._id) !== null) {
      history.push(`/poll/result/${params._id}`);
    }
    else {
      callOptionPage();
    }
  }, []);
  return (
    <div className="polldata">
      <h3 className="pollquestion">{dataoption.question}</h3>
      {
        array.map((value) => {
          return (<Option mainId={dataoption._id} value={value} key={value._id} />);
        })
      }


      <Button className="GeneratePollButton1" onClick={optionSubmitHandler}>Submit Option</Button>

    </div>
  )
}

export default Poll