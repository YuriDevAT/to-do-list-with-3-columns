import React from 'react';

const Form = ({ input, setInput, todos, setTodos }) => {   

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
    
    return (
            <form className="bg-green-400 h-full mt-4">
                <label htmlFor="form">
                <input className="w-1/2 mr-2 py-3 "
                type="text" value={input} onChange={inputHandler} />
                <button type="submit" onClick={submitHandler} ><i className="bi bi-plus"></i></button>     
                </label>           
                <select>
                    <option>All</option>
                    <option>Done</option>
                    <option>Undone</option>
                </select>
            </form>
    );
};

export default Form;
