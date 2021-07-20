import React,{useRef} from 'react'
import { useParams } from 'react-router-dom'
import './ResultOption.css'

const ResultOption = (props) => {

    // const box1=useRef();
    const params = useParams();
    let val;
    if (props.total === 0) props.total = 1;

    val = (props.value.vote / props.total) * 100;
    val = Math.round(val);

    const a = localStorage.getItem(params._id);
    const box=document.getElementById(a);
    if(box)
     {
         box.style.boxShadow="0 4px 8px 0  #24E843, 0 6px 20px 0 #8CFF9E";
     }

    console.log(a);
    
    return (
        <div className="polloption1" >
            <div className="polloptiondata1" id={props.value._id}>
                <p>{props.value.text}</p>
                <p className="vote">{`Vote ${props.value.vote}`}</p>
                <h6 className="votepercent">{`${val}%`}</h6>
            </div>
        </div>
    )
}

export default ResultOption