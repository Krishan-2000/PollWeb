import React from 'react'
import './ResultOption.css'

const ResultOption = (props) => {
    return (
        <div className="polloption1" >
            <div className="polloptiondata1" >
                <p>{props.value.text}</p>
                <p className="vote">{`Vote ${props.value.vote}`}</p>
            </div>
        </div>
    )
}

export default ResultOption