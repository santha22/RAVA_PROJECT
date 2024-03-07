import React, {useState, useEffect} from "react";
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  // useEffect is used for side effects 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setFilteredTodos(data);
      })
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  // delete functionality
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    setFilteredTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };


  // update functionality
  const handleUpdate = (id, updatedText) => {
    // change the state of todo
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: updatedText } : todo
      )
    );

    // change the state of filteredTodos
    setFilteredTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: updatedText } : todo
      )
    );
  };


  return (
    <div className="container">
      <h1 className="d-flex justify-content-center">Todo List App</h1>
      <TodoList todos={filteredTodos} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
};

export default App;