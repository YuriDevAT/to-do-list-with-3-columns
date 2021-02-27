import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos, setTodos, filtered }) => {    

    return (
        <div className="mt-6 py-2 px-2">
            <ul>
                <li>
                {filtered.map((todo) => (
                    <ToDo
                    setTodos={setTodos}
                    todos={todos} 
                    key={todo.id} 
                    todo={todo}
                    text={todo.text} />
                ))}
                </li>
            </ul>
        </div>
    );
};

export default ToDoList;