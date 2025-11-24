export default function Tasklist({tasks , updateTask, deleteTask}) {
  const toggleComplete = (index) => {
   const updatedTask = {...tasks[index], 
    completed: !tasks[index].completed};
   updateTask(updatedTask, index);
  }
  return (
    <ul className="task-list">
      {tasks.map((task, index)=>(
        <li key={index} className={task.completed ? "completed" : ''}>
          <div> {task.text}
           <br></br>
         
            <small>{task.priority} , 
              {task.category}</small>

          </div>
          <div className="task-actions">
            <button className="complete-btn" onClick={()=>{toggleComplete(index)}}>
              {task.completed ? "Undo" : "Complete"}</button>
            <button className="delete-btn" onClick={()=> deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  )
}