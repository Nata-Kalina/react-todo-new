import React from 'react';
import TodoListItem from './TodoListItem';
import style from './App.module.css';

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

export default TodoList;
