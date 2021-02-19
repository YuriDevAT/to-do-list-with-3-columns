import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {    
    getLocalTodos();
  }, []);

  useEffect(() => {    
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
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
    <div className="bg-blue-500 h-screen text-center box-border">
      <header className="py-12 text-gray-100 font-sans">
        <h1 className="text-6xl">React To Do List</h1>  
        <h2 className="text-xl mt-3">styled with TailwindCSS</h2>        
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
