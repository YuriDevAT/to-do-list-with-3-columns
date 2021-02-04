import React from 'react';
import ToDo from './ToDo';

const ToDoList = () => {

    return (
        <div className="to-do-list">
            <ul>
                {todos.map((todo) => (
                    <ToDo />
                ))}                
            </ul>
        </div>
    )
}

export default ToDoList;