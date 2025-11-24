import { useState,useEffect } from 'react';
import Taskform from './Components/Taskform'
import TaskList from './Components/TaskList'
import ProgressTraker from './Components/ProgressTraker';
import './Style.css'
import Header from './Components/Header';


export default function App() {
  const [tasks, setTasks] = useState([]);


  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  });


  const addTask = (task)=>{
    setTasks([...tasks, task])
  }


  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index))

  }

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div className='App'>
      <header>
        <Header />
      </header>
      <Taskform addTask={addTask}/>
      <TaskList tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask} />
      <ProgressTraker  tasks = {tasks}/>
      {tasks.length>0 && (<button class='clear-btn' onClick={clearTasks}>Clear All Tasks</button>)}
      
    </div>
  )
}
