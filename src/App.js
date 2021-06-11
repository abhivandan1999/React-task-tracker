import Header from './components/Header'
import {useState} from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Cricket',
        day: 'Jun 4th at 5pm'
    },
    {
      id: 2,
      text: 'Coding',
      day: 'Jun 4th at 5pm'
  }
  ])
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder:!task.reminder}:task))
  }
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = {id, ...task} ;
    setTasks([...tasks, newTask]);
  }
  return ( //can only return single parent element
    <div className = "container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length >0  ? 
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) :
        ('No Tasks')
      }
    </div>
  );
}

export default App;
