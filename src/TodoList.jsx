import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList }) => {
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
