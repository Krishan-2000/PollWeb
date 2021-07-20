import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ResultOption from './ResultOption'
import './ResultOption.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from './Error';

const AdminPage = () => {

  const params = useParams();
  const [dataoption, setdataoption] = useState('');
  const [array, setarray] = useState([]);
  // const [sum,setsum]=useState(parseInt(0));
  let totals=parseInt(0);
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
      console.log(err);
    }

  }
  for(let i=0; i<array.length; i++)
  {
      totals+=parseInt(array[i].vote);
  }

  useEffect(() => {
    callResultPage();
  }, []);
  // console.log(array);
  return ((<div>
      <div className="polldata1">
        <h3 className="pollquestion1">{dataoption.question}</h3>

        {
          array.map((value) => {
            return (<ResultOption key={value._id} total={totals} value={value} />);
          })
        }

      </div>
    </div>)
  )
}

export default AdminPage