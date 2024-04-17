import React from 'react';

const TodoListItem = ({ item, onRemoveTodo }) => {
  return (
    <>
      <li>
        {' '}
        {item.title}{' '}
        <button type="button" onClick={() => onRemoveTodo(item)}>
          Remove
        </button>
      </li>
    </>
  );
};

export default TodoListItem;
