import { useState } from 'react';

function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Build a project", completed: false },
    { text: "Master the frontend", completed: false },
  ]);

  const handleAddTodo = () => {
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const handleTodoComplete = (index) => {
    setTodos(todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };
console.log(todos)
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="flex-1 border border-gray-300 rounded px-3 py-2"
        placeholder="What's on your mind?"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Task
      </button>

      <ul>
        {todos.map((todo, index) => (
          <div key={index} className="flex items-center mb-3">
            <li
              className={todo.completed ? "line-through text-gray-500" : ""}
              style={{ flex: 1 }}
            >
              {todo.text}
            </li>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleTodoComplete(index)}
            />
            <button
              onClick={() => handleDelete(index)}
              className="text-red-500 hover:text-red-700 text-sm ml-4"
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

  