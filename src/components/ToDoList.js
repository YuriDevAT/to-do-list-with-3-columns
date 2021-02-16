import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos, setTodos }) => {
    

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <ToDo
                    setTodos={setTodos}
                    todos={todos} 
                    key={todo.id} 
                    text={todo.text} />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;