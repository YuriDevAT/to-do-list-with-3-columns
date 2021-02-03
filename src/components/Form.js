import React, { useState } from 'react';

const Form = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState('');

    const inputHandler = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault(); 
        setTodos([
            ...todos, { text: input, completed: false, id: Math.random() * 1000 } //change this with an installing package for unique number
        ]);
        setInput('');
    }
    
    return (
            <form className="form">
                <label htmlFor="form">
                <input type="text" value={input} onChange={inputHandler} />
                <button type="submit" onClick={submitHandler} >+</button>     
                </label>           
                <select>
                    <option>All</option>
                    <option>Done</option>
                    <option>Undone</option>
                </select>
            </form>
    )
}

export default Form;
