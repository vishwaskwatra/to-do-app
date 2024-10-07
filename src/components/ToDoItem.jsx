/* eslint-disable react/prop-types */
import { useState } from "react";

const ToDoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, editedText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex items-center justify-between bg-gray-50 p-3 mb-2 rounded shadow-sm">
      <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="border-b border-gray-300 focus:outline-none"
          />
        ) : (
          todo.text
        )}
      </span>
      <div className="flex space-x-2">
        <button
          onClick={() => toggleComplete(todo.id)}
          className={`p-2 rounded ${todo.completed ? 'bg-green-400' : 'bg-gray-300'} hover:bg-green-500`}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={handleEdit}
          className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
