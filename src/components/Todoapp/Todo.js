import React, { useState,useEffect } from 'react'
import AddTask from './AddTask';
import ListTask from './ListTask';
import "./Todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
   useEffect(()=>{
    document.title=`You have ${tasks.length} pending Task(s)`
  });
  const addTask =(title)=> {
        const newTask = [...tasks,{title}]
        setTasks(newTask);
  }

  const removeTask = (index)=> {
    const newTask = [...tasks]
    newTask.splice(index,1);
    setTasks(newTask)
  }
  return (
    <>
      <div className="todo-container">
        <div className="header"> TODO APP</div>
            <div className="add-task">
                <AddTask addTask={addTask} />
            </div>
             <div className="tasks"> 
              {tasks.map((tasks, index)=>
                  <ListTask task={tasks} removeTask={removeTask} index={index} key={index}/>
              )}
               
                 </div>
                  
           
             </div>
    

    </>
  )
};

export default Todo
