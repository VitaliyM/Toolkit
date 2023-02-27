import React from 'react';
import './../../src/App.css';

const InputField = ({text, handleInput, handleSubmit}) => {
    return (
        <label>
            <input className='input-place' value={text} onChange={(e) => handleInput(e.target.value)} />
            <button onClick={handleSubmit}>Add Todo</button>
        </label>
    )
}

export default InputField