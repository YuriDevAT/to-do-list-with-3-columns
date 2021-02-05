import React from 'react';

const ToDo = ({ text }) => {    

    return (
        <div>
            <li>{text}</li>
            <button><i className="bi bi-check2-square"></i></button>
            <button><i className="bi bi-trash"></i></button>
        </div>
    );
};

export default ToDo;
