import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos, setTodos, filtered }) => {    

    return (
        <div className="bg-yellow-500">
            <ul>
                {filtered.map((todo) => (
                    <ToDo
                    setTodos={setTodos}
                    todos={todos} 
                    key={todo.id} 
                    todo={todo}
                    text={todo.text} />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;