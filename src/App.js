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
    return filterHandler();
  }, [todos, status]);

  useEffect(() => {
    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    } 
    return saveLocalTodos();
  },[todos, status]);


  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-w-screen min-h-screen text-center box-border">
      <header className="py-12 text-gray-100 font-sans">
        <h1 className="text-4xl sm:text-6xl font-react-font">React To Do List</h1>  
        <h2 className="text-lg sm:text-xl mt-3 font-subheading">styled with TailwindCSS</h2>        
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
