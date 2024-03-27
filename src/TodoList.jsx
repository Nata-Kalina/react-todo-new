import React from 'react';
import TodoListItem from './TodoListItem';

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
const TodoList = () => {
  return (
    <>
      <ul style={{ textAlign: 'left' }}>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} item={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
