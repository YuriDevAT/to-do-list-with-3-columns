import React from 'react';

const ToDo = ({ text, todo, todos, setTodos }) => {    

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item; 
        }));
    }    

    return (
        <div className="bg-yellow-500 flex justify-start border rounded-lg mx-auto max-w-md mt-2">
            <li className={`bg-gray-500 py-3 ml-2 flex-1 text-left ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="bg-blue-500 hover:bg-blue-700 jflex-initial px-5"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="bg-yellow-400 flex-initial px-5 hover:bg-yellow-600 "><i className="fas fa-trash"></i></button>
        </div>
    );
};

export default ToDo;
