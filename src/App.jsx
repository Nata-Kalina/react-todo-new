import React from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [newTodo, setNewTodo] = React.useState('');

  return (
    <>
      <header style={{ textAlign: 'center' }}>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p style={{ textAlign: 'left' }}>
        <span> New Task: </span>
        {newTodo}
      </p>
      <TodoList />
    </>
  );
}

export default App;
