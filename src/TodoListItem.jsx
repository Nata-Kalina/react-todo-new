import React from 'react';
import style from './TodoListItem.module.css';

const TodoListItem = ({ todo, onRemoveTodo, onUpdateTodo }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState(todo.title);

  const handleUpdate = () => {
    onUpdateTodo(newTitle, todo.id);
    setIsEditing(false);
  };

  return (
    <tr className={style.tr}>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        ) : (
          <span>{todo.title}</span>
        )}
      </td>
      <td>
        {isEditing ? (
          <>
            <button onClick={handleUpdate} className={style.button}>
              Update
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className={style.button}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)} className={style.button}>
              Edit
            </button>
            <button
              onClick={() => onRemoveTodo(todo.id)}
              className={style.button}
            >
              Remove
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default TodoListItem;
