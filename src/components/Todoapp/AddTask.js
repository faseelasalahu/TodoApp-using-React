import React from 'react'

const  AddTask= () => {
  return (
    <>
      <div className='input-container'>
        <input type="text" className='input' placeholder='Add a new Task'/>
        <button className='add-btn'>Add</button>

      </div>
    </>
  )
};

export default AddTask;
