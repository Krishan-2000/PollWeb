import React from 'react'
import './ResultOption.css'

const ResultOption = (props) => {
    return (
        <div className="polloption1" >
            <div className="polloptiondata1" >
                <p>{props.value.text}</p>
                <p className="vote">{`Vote ${props.value.vote}`}</p>
                <h6 className="votepercent">{`${((props.value.vote)/((props.total))*100)}%`}</h6> 
            </div>
        </div>
    )
}

export default ResultOption