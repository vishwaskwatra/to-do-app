import  { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodoText) => {
    if (newTodoText.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodoText, completed: false }]);
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Header />
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <ToDoList 
          todos={todos} 
          addTodo={addTodo} 
          toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo} 
          editTodo={editTodo} 
        />
      </div>
    </div>
  );
};

export default App;
