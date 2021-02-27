import React from 'react';

const Form = ({ input, setInput, todos, setTodos, setStatus }) => {   

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault(); 
        setTodos([
            ...todos, { text: input, completed: false, id: Math.random() * 1000 }
        ]);
        setInput('');
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    
    return (
            <form className="flex flex-col justify-center sm:flex-row max-w-md mx-auto px-2">
                <input
                className="py-2 pl-2 border rounded-lg border-transparent focus:outline-none focus:ring-4 focus:ring-blue-700 focus:border-transparent shadow-md"
                type="text"
                aria-label="Enter task"
                value={input}
                onChange={inputHandler}
                placeholder="Add to do.." />
                <button 
                type="submit"
                aria-label="add task to list"
                onClick={submitHandler}
                className="mx-2 my-2 focus:outline-none">
                    <i 
                    className="fas fa-plus-square text-white text-5xl hover:text-blue-700">
                    </i>
                </button>        
                <select
                onChange={statusHandler}
                aria-label="select which tasks should be shown"
                className="py-2 pl-2 rounded-lg shadow-md cursor-pointer focus:outline-none">
                    <option>all</option>
                    <option>completed</option>
                    <option>uncompleted</option>
                </select>
            </form>
    );
};

export default Form;
