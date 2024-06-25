import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from './App.module.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();

      const todos = data.records.map((todo) => {
        return {
          id: todo.id,
          title: todo.fields.title,
          completedAt: todo.fields.completedAt,
        };
      });

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const postTodo = async (title) => {
    const airtableData = {
      fields: {
        title,
      },
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify(airtableData),
    };

    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }

      const dataResponse = await response.json();

      const newTodo = {
        id: dataResponse.id,
        title: dataResponse.fields.title,
      };

      setTodoList([...todoList, newTodo]);
    } catch (error) {
      console.error(error.message);
      return null;
    }
  };

  const addTodo = (newTodo) => {
    postTodo(newTodo.title);
  };

  const removeTodo = async (id) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}/${id}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }

      const newTodoList = todoList.filter((todo) => {
        return id !== todo.id;
      });
      setTodoList(newTodoList);
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateTodo = async (title, id) => {
    const airtableData = {
      fields: {
        title,
      },
    };

    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify(airtableData),
    };

    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}/${id}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }

      const dataResponse = await response.json();

      const updatedTodo = {
        id: dataResponse.id,
        title: dataResponse.fields.title,
      };

      setTodoList((prevTodoList) =>
        prevTodoList.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
    } catch (error) {
      console.error(error.message);
      return null;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className={style.container} style={{ textAlign: 'center' }}>
                <header style={{ textAlign: 'center' }}>
                  <h1 className={style.headingH1}>Todo List</h1>
                </header>
                <AddTodoForm onAddTodo={addTodo} />
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <TodoList
                    todoList={todoList}
                    onRemoveTodo={removeTodo}
                    onUpdateTodo={updateTodo}
                  />
                )}
              </div>
            </>
          }
        />
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
