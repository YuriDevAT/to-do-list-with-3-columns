import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos }) => {

    return (
        <div className="to-do-list">
            <ul>
                {todos.map(todo => (
                    <ToDo text={todo.text} />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;