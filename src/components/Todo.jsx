
import React, { useState } from 'react';


const Todo = ({ todo, onDelete, onUpdate }) => {
  // keep track of todo is in edit mode or not
  const [isEditing, setEditing] = useState(false);
  // state for updated text
  const [updatedText, setUpdatedText] = useState(todo.title);

  // updating functionality
  const handleUpdate = () => {
    onUpdate(todo.id, updatedText);
    setEditing(false);
  };
    return (
        <div>
          {isEditing ? (
            <div>
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
              />
              <button className='btn btn-primary' onClick={handleUpdate}>Update</button>
            </div>
          ) : (

            <div class="card m-2">
              <div class="card-body">
              {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}
                 <button className='btn btn-primary mx-2' onClick={() => setEditing(true)}>Edit</button>
                 <button className='btn btn-danger' onClick={() => onDelete(todo.id)}>Delete</button>
              </div>
            </div>
          )}
        </div>
    );
}

export default Todo


