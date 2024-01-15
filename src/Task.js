import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Task = ({ tasks, setTasks }) => {
  const handleStrike = (id) => {
    const updatedTasks = tasks.map(task =>
      (task.id === id) ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('Task', JSON.stringify(updatedTasks));
  }

  const handleDelete = (id) => {
    const deletedItem = tasks.filter(task => task.id !== id);
    setTasks(deletedItem);
    localStorage.setItem('Task', JSON.stringify(deletedItem));
  }

  return (
    <div>
      <div className="task-section">
        {tasks.length > 0 ? (
          <div className="tasks">
            {tasks.map(task => (
              <div className='task' key={task.id}>
                <input
                  type='checkbox'
                  onClick={() => handleStrike(task.id)}
                  className={task.checked ? 'completed' : 'unchecked'}
                />
                <p className={task.checked ? 'checked' : ''}>{task.name}</p>
                <FontAwesomeIcon className='fonts' icon={faTrash} onClick={() => handleDelete(task.id)} />
              </div>
            ))}
          </div>
        ) : (
          <div className="error">
            <p>Welcome to TaskHarbor.</p>
            <p>Add Something to do.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Task;
