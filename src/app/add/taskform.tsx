import React, { useState } from 'react';
import { supabase } from "../../../utils/supabase/supabase";

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from('Tasks')
      .insert([
        { title: title, description: description }
      ]);
  
    if (error) {
      console.error('Error inserting data', error);
      return;
    }
  
    // Clear the form fields after successful insertion
    setTitle('');
    setDescription('');
  
    console.log('Task added:', data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
