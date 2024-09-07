import React from 'react'
import AddTask from './AddTask';
import ListTask from './ListTask';
import "./Todo.css";

const Todo = () => {
  return (
    <>
      <div className="todo-container">
        <div className="header"> TODO APP</div>
            <div className="add-task">
                <AddTask />
            </div>
             <div className="tasks"> 
                 <ListTask />
                 </div>
                  
           
             </div>
    

    </>
  )
};

export default Todo
