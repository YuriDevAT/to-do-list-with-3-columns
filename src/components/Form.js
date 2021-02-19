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
            <form className="py-8 flex justify-center">
                <input
                className="py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-800"
                type="text"
                value={input}
                onChange={inputHandler}
                placeholder="Add to do.." />
                <button 
                type="submit"
                onClick={submitHandler}
                className="mr-2 bg-blue-500">
                    <i 
                    className="fas fa-plus-square text-white text-5xl hover:text-gray-900">
                    </i>
                </button>        
                <select
                onChange={statusHandler}
                className="py-3 border border-gray-400 rounded-lg ">
                    <option>all</option>
                    <option>completed</option>
                    <option>uncompleted</option>
                </select>
            </form>
    );
};

export default Form;
