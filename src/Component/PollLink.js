import React, { useState } from 'react'
import copy from "copy-to-clipboard";
import './PollLink.css'

const PollLink = (props) => {

  const [copyText, setcopyText] = useState(`http://localhost:3000/pollLink/${props.value}`);

  const handlecopyText = (e) => {
  
  }

  

  const copyToClipboard = (e) => {
    setcopyText(e.target.value);
    copy(copyText);
    console.log(copyText);
    alert(`You have copied "${copyText}"`);
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
    </div>
  )
}

export default PollLink