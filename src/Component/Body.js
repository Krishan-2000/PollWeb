import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom";
import './Body.css'
import InputQuestion from './InputQuestion'
import InputOption from './InputOption'
import Button from './Button'
import { InputContext } from './ContextApi/InputContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Body = (props) => {
    const history = useHistory();
    const [inputfield, setInputfield] = useContext(InputContext);
    const [inputquestion, setquestion] = useState("");

    const onsubmithandler = (event) => {
        event.preventDefault();
        setInputfield(() => {
            return [...inputfield, { text: "", vote: 0 }];
        })
    }


    const onsubmitdatahandler = async (event) => {
        event.preventDefault();

        if (inputquestion.trim().length === 0) {
            toast.info("Question Field Required",{
            });
            
            return;
        }
        // const obj={inputquestion, inputfield}
        for (let i = 0; i < inputfield.length; i++) {
            if (inputfield[i].text.trim().length === 0) {
                toast.info("Option Field Required",{
                });
                return;
            }
        }


        const res = await fetch("/api/poll/createpoll", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question: inputquestion, option: inputfield })
        });

        const data = await res.json();
        if (res.status === 400 || !data) {

        }
        else {
            toast("Poll Created!");
            props.GetData(data._id);
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

        <>
            <div className="Body">
                <div className="BodyInnerDiv">
                    <h2 className="Heading">Create Poll</h2>
                    <p className="para">Complete Below Field to create a Poll</p>
                    <br />
                    <p className="para1">Poll Question</p>
                    <form >
                        <InputQuestion onChange={onChangeHandler} />
                        {inputfield.map((val, index) => (
                            <>
                                <h2 key={Date.now()} className="OptionHeading">Option {index + 1}</h2>
                                <InputOption key={index} arr={inputfield} value={val.text} id={index} onChange={onChangeHandlerOption} onDelete={DeleteitemHandler} />
                            </>
                        ))}
                        <Button className="AddOptionButton" onClick={onsubmithandler}>Add Option</Button>
                        <Button className="GeneratePollButton" onClick={onsubmitdatahandler}>Create Your Poll</Button>
                    </form>
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
        </>
    )
}

export default Body;