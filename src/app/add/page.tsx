"use client";
import { supabase } from "../../../utils/supabase/supabase";
import React, { useState } from "react";
import TaskForm from "./taskform";
import Link from 'next/link'

export default function Page() {
  async function addTask() {
    try {
    } catch (error) {
      console.log("Error Adding!");
    }
  }

  return (
    <div>
      <h1>Add a Task</h1>
      <TaskForm></TaskForm>
      <Link href='/'>Done</Link>
    </div>
  );
}
