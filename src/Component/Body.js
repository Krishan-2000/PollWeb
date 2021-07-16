import React, { useContext, useState } from 'react'
import './Body.css'
import InputQuestion from './InputQuestion'
import InputOption from './InputOption'
import Button from './Button'
import { InputContext } from './ContextApi/InputContext'

const Body = () => {

    const [inputfield, setInputfield] = useContext(InputContext);
    const [inputquestion, setquestion] = useState("");

    const onsubmithandler = (event) => {
        event.preventDefault();
        setInputfield(() => {
            return [...inputfield, { text: "", id: Math.random() }];
        })
    }

    const onsubmitdatahandler = (event) => {
        event.preventDefault();
        console.log(inputfield);
        console.log(inputquestion);
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
            <div>
                <h2>Create Poll</h2>
                <p>Complete Below Field to create a Poll</p>
                <p>Poll Question</p>
                <form >
                    <InputQuestion onChange={onChangeHandler} />
                    {inputfield.map((val, index) => (
                        <>
                            <h2 key={Date.now()}>Option {index}</h2>
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