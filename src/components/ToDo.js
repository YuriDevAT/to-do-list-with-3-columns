import React from 'react';

const ToDo = ({ text, todo, todos, setTodos }) => {    

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item; 
        }))
    }    

    return (
        <div className="">
            <li className={todo.completed ? "completed" : ''}>{text}</li>
            <button onClick={completeHandler} className="">Check</button>
            <button onClick={deleteHandler} className="">X</button>
        </div>
    );
};

export default ToDo;
