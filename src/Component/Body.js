import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom";
import './Body.css'
import InputQuestion from './InputQuestion'
import InputOption from './InputOption'
import Button from './Button'
import { InputContext } from './ContextApi/InputContext'
// import PollLink from './PollLink'

const Body = (props) => {
     const history = useHistory();
    const [inputfield, setInputfield] = useContext(InputContext);
    const [inputquestion, setquestion] = useState("");

    const onsubmithandler = (event) => {
        event.preventDefault();
        setInputfield(() => {
            return [...inputfield, { text: "", vote : 0}];
        })
    }


    const onsubmitdatahandler = async(event) => {
        event.preventDefault();
        // const obj={inputquestion, inputfield}

        const res= await fetch("/api/poll/createpoll",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({question:inputquestion, option:inputfield})
        });

        const data=await res.json();
        if(res.status===400 || !data)
        {
            window.alert("Something Went Wrong");
        }
        else
        {
            window.alert("Poll Created");
            props.GetData(data._id);
            // console.log(data);
            console.log(data._id);
            history.push('/pollLink');
        }
    }

    const onChangeHandler = (val) => {
        setquestion(val);
    }

    const onChangeHandlerOption = (id, val) => {
        const values = [...inputfield];
        values[id]["text"] = val;
        setInputfield(values);
    }

    const DeleteitemHandler = (id) => {
        if (inputfield.length > 2) {
            setInputfield((olditems) => {
                return olditems.filter((arrele, index) => {
                    return index !== id;
                })
            })
        }
    }

    return (
        <div className="Body">
            <div className="BodyInnerDiv">
                <h2 className="Heading">Create Poll</h2>
                <p className="para">Complete Below Field to create a Poll</p>
                <br/>
                <p className="para1">Poll Question</p>
                <form >
                    <InputQuestion onChange={onChangeHandler} />
                    {inputfield.map((val, index) => (
                        <>
                            <h2 key={Date.now()} className="OptionHeading">Option {index+1}</h2>
                            <InputOption key={index} value={val.text} id={index} onChange={onChangeHandlerOption} onDelete={DeleteitemHandler} />
                        </>
                    ))}
                    <Button className="AddOptionButton" onClick={onsubmithandler}>Add Option</Button>
                 <Button className="GeneratePollButton" onClick={onsubmitdatahandler}>Create Your Poll</Button>
                </form>
            </div>
        </div>
    )
}

export default Body;