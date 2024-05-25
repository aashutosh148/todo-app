import { useState, useEffect } from 'react';
import axios from 'axios';
import Task from '../components/Task';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className='px-5' >
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <ul>
        {tasks.map((task) => (
          <Task key={task._id} task={task} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;