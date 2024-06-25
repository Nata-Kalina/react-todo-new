import React from 'react';
import TodoListItem from './TodoListItem';
import style from '../App.module.css';
import PropTypes from 'prop-types';

const TodoList = ({ todoList, onRemoveTodo, onUpdateTodo }) => {
  return (
    <>
      <div className={style.todoListContainer}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th className={style.actions}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                onRemoveTodo={onRemoveTodo}
                onUpdateTodo={onUpdateTodo}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
};

export default TodoList;
