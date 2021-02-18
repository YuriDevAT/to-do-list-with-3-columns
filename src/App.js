import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    getLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFiltered(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFiltered(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFiltered(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="">
      <header className="">
        <h1 className="">To Do List</h1>          
      </header>
      <Form
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      setStatus={setStatus}
      />
     <ToDoList 
     setTodos={setTodos} 
     todos={todos}     
     filtered={filtered}
     />
    </div>
  );
}

export default App;
