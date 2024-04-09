"use client";
import { useParams, useSearchParams } from "next/navigation";

function UpdateTask() {
  const params = useParams();
  const searchParams = useSearchParams();
  const taskId = params.id;
  const taskDescription = searchParams.get("description");

  console.log(taskId);
  console.log(taskDescription);
  return (
    <div>
      <h1>Update Task</h1>
      <p>Task ID: {taskId}</p>
      <p>Description: {taskDescription}</p>
      {/* Render the update form */}
    </div>
  );
}

export default UpdateTask;
