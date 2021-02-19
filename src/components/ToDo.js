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
        <div className="bg-white-500 flex justify-center border">
            <li className={`my-3 ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="mx-2"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} ><i className="fas fa-trash"></i></button>
        </div>
    );
};

export default ToDo;
