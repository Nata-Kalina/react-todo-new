import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <>
      <ul style={{ textAlign: 'left' }}>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} item={todo} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
