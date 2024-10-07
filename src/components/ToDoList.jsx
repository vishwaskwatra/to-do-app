/* eslint-disable react/prop-types */

import  { useState } from 'react';
import ToDoItem from './ToDoItem';


const ToDoList = ({ todos, addTodo, toggleComplete, deleteTodo, editTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new task"
          className="flex-grow border border-gray-300 p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
