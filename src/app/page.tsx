"use client";
import { redirect } from "next/dist/server/api-utils";
import { supabase } from "../../utils/supabase/supabase";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Page() {
  const [tasks, setTasks] = useState([]);

  async function fetchData() {
    try {
      const { data, error } = await supabase.from("Tasks").select("*");
      if (error) {
        console.log("Error in grabbing data");
        return;
      }
      setTasks(data);
      console.log(data);
      redirect;
    } catch (error) {
      console.log("Error in grabbing data");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function deleteData(id) {
    try {
      const { error } = await supabase.from("Tasks").delete().eq("task_id", id);
      if (error) {
        console.log("Error in deleting data", error);
        return;
      }
      setTasks((prevTasks) => prevTasks.filter((task) => task.task_id !== id));
    } catch (error) {
      console.log("Error in deleting data");
    }
  }

  return (
    <div className="flex flex-col">
      <div className="m-4">
        <button
          onClick={() => fetchData()}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Refresh Tasks
        </button>
        <ul className="list-inside">
          {tasks.map((task) => (
            <li key={task.task_id} className="flex ml-4 justify-between">
              {task.title}
              <button>Add Category</button>
              <Link
                href={{
                  pathname: `/update/${task.task_id}`,
                  query: { description: task.description },
                }}
                as={`/update/${task.task_id}`}
              >  
                Update
              </Link>
              <button onClick={() => deleteData(task.task_id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
