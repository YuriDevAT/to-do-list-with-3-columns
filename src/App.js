import { useState } from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState('');

  return (
    <div className="bg-blue-500 h-screen flex flex-col">
      <header className="w-full bg-blue-800">
        <h1 className="capitalize text-white py-5 text-5xl text-center text-color-gray-200 font-bold">To Do List</h1>          
      </header>
      <Form
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      />
     <ToDoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
