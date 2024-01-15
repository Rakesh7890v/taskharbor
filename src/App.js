import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Input from './Input';
import Task from './Task';

function App() {

  const [tasks, setTasks] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [newItem, setNewItem] = useState({
    id: 1,
    name: '',
    checked: false
  });

  useEffect(() => {
    const storedTask = JSON.parse(localStorage.getItem('Task')) || [];
    setTasks(storedTask);
  }, []);
  
  const addItem = (name, checked) => {
    const newId = tasks.length + 1;
    const addNewItem = { id: newId, name, checked };
    const updatedTasks = [...tasks, addNewItem];
    setTasks(updatedTasks);
    localStorage.setItem('Task', JSON.stringify(updatedTasks));
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = newItem.name.trim();
    if (!trimmedValue) {
      setEmpty(true);
      setTimeout(() => {
        setEmpty(false);
      }, 2000);
    } else {
      addItem(newItem.name, newItem.checked);
      setNewItem({
        id: newItem.id + 1,
        name: '',
        checked: false
      });
    }
  };

  return (
    <div className="App">
      <Header empty={empty}/>
      <Input newItem={newItem} setNewItem={setNewItem} tasks={tasks} setTasks={setTasks} handleSubmit={handleSubmit}/>
      <Task tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
