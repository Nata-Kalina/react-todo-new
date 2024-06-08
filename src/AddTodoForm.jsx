import React from 'react';
import InputWithLabel from './InputWithLabel';
import style from './App.module.css';

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = React.useState('');

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (todoTitle.trim()) {
      onAddTodo({ title: todoTitle });
      setTodoTitle('');
    }
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
          id="todoTitle"
          value={todoTitle}
          onInputChange={handleTitleChange}
          className={style.addTodoTitle}
        >
          Title
        </InputWithLabel>
        <button type="submit" className={style.addTodoButton}>
          Add
        </button>
      </form>
    </>
  );
};

export default AddTodoForm;
