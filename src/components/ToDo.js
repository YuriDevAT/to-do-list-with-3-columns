import React from 'react';

const ToDo = ({ text, todos, setTodos }) => {    

    return (
        <div>
            <li>{text}</li>
            <button>Check</button>
            <button>X</button>
        </div>
    );
};

export default ToDo;
