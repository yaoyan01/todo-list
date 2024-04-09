'use client'
import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabase/supabase';

export default function Home() {
  // const [todos, setTodos] = useState([]);
  // const [newTodo, setNewTodo] = useState('');
  // const [editTodo, setEditTodo] = useState(null);

  // useEffect(() => {
  //   fetchTodos();
  // }, []);

  // async function fetchTodos() {
  //   try {
  //     const { data, error } = await supabase.from('Tasks').select('*');
  //     if (error) {
  //       console.error('Error fetching tasks:', error);
  //       return;
  //     }
  //     setTodos(data);
  //   } catch (error) {
  //     console.error('Error fetching tasks:', error);
  //   }
  // }

  // async function addTodo() {
  //   if (newTodo.trim() === '') return;
  //   try {
  //     const { data, error } = await supabase
  //       .from('Tasks')
  //       .insert([{ title: newTodo }]);
  //     if (error) {
  //       console.error('Error adding task:', error);
  //       return;
  //     }
  //     setTodos([...todos, ...data]);
  //     setNewTodo('');
  //   } catch (error) {
  //     console.error('Error adding task:', error);
  //   }
  // }

  // async function removeTodo(task_id) {
  //   try {
  //     const { error } = await supabase
  //       .from('Tasks')
  //       .delete()
  //       .match({ task_id });
  //     if (error) {
  //       console.error('Error removing task:', error);
  //       return;
  //     }
  //     setTodos(todos.filter(todo => todo.task_id !== task_id));
  //   } catch (error) {
  //     console.error('Error removing task:', error);
  //   }
  // }

  // async function updateTodo(task_id) {
  //   if (editTodo.trim() === '') return;
  //   try {
  //     const { error } = await supabase
  //       .from('Tasks')
  //       .update({ title: editTodo })
  //       .match({ task_id });
  //     if (error) {
  //       console.error('Error updating task:', error);
  //       return;
  //     }
  //     setTodos(todos.map(todo => todo.task_id === task_id ? { ...todo, title: editTodo } : todo));
  //     setEditTodo(null); // Reset edit input
  //   } catch (error) {
  //     console.error('Error updating task:', error);
  //   }
  // }

  return (
    <div className='flex flex-col items-center'>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.task_id}>
            {todo.title}
            <button onClick={() => removeTodo(todo.task_id)}>Remove</button>
            <button onClick={() => setEditTodo(todo.title)}>Edit</button>
            {editTodo && (
              <div>
                <input
                  type="text"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                />
                <button onClick={() => updateTodo(todo.task_id)}>Update</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
