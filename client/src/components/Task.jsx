import React from 'react';
import { Link } from 'react-router-dom';

function Task({ task, onDelete }) {
  const { _id, title, description, status, dueDate } = task;

  const formattedDate = new Date(dueDate).toLocaleDateString();

  return (
    <li className="bg-white shadow-md rounded-lg p-4 mb-4 px-5">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex space-x-2">
          <Link
            to={`/edit/${_id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
          >
            Edit
          </Link>
          <button
            onClick={() => onDelete(_id)}
            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-500">
          Status: {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
        <span className="text-gray-500">Due: {formattedDate}</span>
      </div>
    </li>
  );
}

export default Task;