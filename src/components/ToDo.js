import React, { useState } from 'react';
import DeleteModal from './DeleteModals';

const ToDo = ({ text, todo, todos, setTodos }) => {    
    const [show, setShow] = useState(false); 

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

    const showModal = (e) => {
        e.setShow({show: true})
    }

    const deleteHandler = (e) => {
        if (setShow != show) {
        setTodos(todos.filter((el) => el.id !== todo.id));
        } else {
            e.preventDefault();
        }
    }

    return (
        <div >
            <ul className="bg-white flex justify-start rounded-lg mx-auto max-w-md mt-2 shadow-xl">
            <li className={`py-2 ml-2 flex-1 text-left ${todo.completed ? "completed" : ''}`}>{text}</li>            
            <button onClick={completeHandler} aria-label="mark item as done" className="bg-blue-500 hover:bg-blue-700 flex-initial px-4"><i className="fas fa-check"></i></button>
            <button onClick={showModal} aria-label="delete task" className="bg-yellow-400 flex-initial px-4 hover:bg-yellow-600 rounded-r-lg"><i className="fas fa-trash"></i></button>
            </ul>
        </div>
    );
};

export default ToDo;
