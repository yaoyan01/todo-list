import { useParams } from "next/navigation";
import { supabase } from "../../../../utils/supabase/supabase";
import { useState, useEffect } from "react";

function SetDescription() {
  const params = useParams();
  const task_id = params.id;
  const [task, setTask] = useState(null);
  const [error, setError] = useState(null);

  async function fetchTask() {
    try {
      const { data, error } = await supabase
        .from("Tasks")
        .select()
        .eq("task_id", task_id);

      if (error) {
        console.log("Error with pulling:", error);
        setError(error);
      } else {
        // Assuming data is an array, take the first element
        setTask(data[0]);
      }
    } catch (error) {
      console.log("Error fetching task:", error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchTask();
  }, [task_id]); // Add task_id as a dependency to refetch if it changes

  // Safely access task properties
  console.log(task?.id);

  if (error) {
    return <div>Error loading task: {error.message}</div>;
  }

  return (
    <div>
      <h1>This is the description: {task ? task.description : 'Loading...'}</h1>
    </div>
  );
}

export default SetDescription;

