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
            <form className="py-8 bg-red-500">
                <input
                className="py-3 border border-gray-400 rounded-lg"
                type="text"
                value={input}
                onChange={inputHandler} />
                <button 
                type="submit"
                onClick={submitHandler}
                className="mr-2 bg-blue-500">
                    <i 
                    className="fas fa-plus-square text-white text-4xl">
                    </i>
                </button>        
                <select
                onChange={statusHandler}
                className="py-3 border border-gray-400 rounded-lg">
                    <option>all</option>
                    <option>completed</option>
                    <option>uncompleted</option>
                </select>
            </form>
    );
};

export default Form;
