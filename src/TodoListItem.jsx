import React from 'react';

const TodoListItem = ({ todo, onRemoveTodo, onUpdateTodo }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState(todo.title);

  const handleUpdate = () => {
    onUpdateTodo(newTitle, todo.id);
    setIsEditing(false);
  };

  return (
    <>
      <li>
        {isEditing ? (
          <>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button onClick={handleUpdate}>Update</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <span>{todo.title}</span>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
          </>
        )}
      </li>
    </>
  );
};

export default TodoListItem;
