import React, { useEffect, useState } from 'react'
import copy from "copy-to-clipboard";
import './PollLink.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PollLink = (props) => {

  const [copyText, setcopyText] = useState(`http://localhost:3000/poll/${props.value}`);

  const handlecopyText = (e) => {

  }

  useEffect(() => {
    toast.success("Poll Created Succesfully!!",{
    });
  }, [])

  const copyToClipboard = (e) => {
    setcopyText(e.target.value);
    copy(copyText);
    console.log(copyText);
    toast.success("Link Copied",{
    });
    
  }


  return (
    <div className="mainDiv">
      <div className="childdiv">
        <div className="LinkUser">
          <h3 className="h3userLink">The link to your poll is</h3>
          <textarea className="textareaLink" type="text" onChange={handlecopyText} value={copyText} />
          <i className="fa fa-clipboard copybutton" onClick={copyToClipboard} aria-hidden="true"></i>
        </div>
        <div className="LinkadminUser">
          <h3 className="h3adminLink">The admin link to your poll is</h3>
          <textarea className="textareaLink" type="text" onChange={handlecopyText} />
          <i className="fa fa-clipboard copybutton" onClick={copyToClipboard} aria-hidden="true"></i>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2500}
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

export default PollLink