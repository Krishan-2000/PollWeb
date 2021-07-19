import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ResultOption from './ResultOption'
import './ResultOption.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    toast.success("Thanks For Your Vote", {
    });
  }, []);
  console.log(array);
  return (
    <div>
      <div className="polldata1">
        <h3 className="pollquestion1">{dataoption.question}</h3>

        {
          array.map((value) => {
            return (<ResultOption key={value._id} value={value} />);
          })
        }

      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default ResultPage