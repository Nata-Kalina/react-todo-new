import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const todoList = [
  {
    id: '1',
    title: 'Complete lesson 1.1 React',
  },
  {
    id: '2',
    title: 'Complete lesson 1.1 Python',
  },
  {
    id: '3',
    title: 'Complete lesson 1.1 DSA',
  },
  {
    id: '4',
    title: 'Start learning Okta',
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header style={{ textAlign: 'center' }}>
        <h1>Todo List</h1>
      </header>
      <ul style={{ textAlign: 'left' }}>
        {todoList.map(function (item) {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
