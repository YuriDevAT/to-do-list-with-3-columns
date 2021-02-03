import React, { useState, useEffect } from 'react';

const ToDoList = () => {
    const [task, setTask] = useState('');


const handlerChange = e => {
}

    return (
        <div>
            <form>
                <label for="task"></label>
                <input type="text" />
                <button type="submit" onClick={handlerChange}>Add Task</button> 
            </form>
        </div>
    )
}

export default ToDoList;
