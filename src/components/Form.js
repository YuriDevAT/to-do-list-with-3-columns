import React from 'react';

const Form = ({ input, setInput, todos, setTodos, setStatus }) => {   

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault(); 
        setTodos([
            ...todos, { text: input, completed: false, id: Math.random() * 1000 } //change this with an installing package for unique number
        ]);
        setInput('');
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    
    return (
            <form className="">
                <label htmlFor="">
                <input className=""
                type="text" value={input} onChange={inputHandler} />
                <button type="submit" onClick={submitHandler} className="">+</button>     
                </label>           
                <select onChange={statusHandler}>
                    <option>All</option>
                    <option>Done</option>
                    <option>Undone</option>
                </select>
            </form>
    );
};

export default Form;
