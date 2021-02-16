import { useState } from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState('');

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>          
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
