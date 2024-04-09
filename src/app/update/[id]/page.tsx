"use client";
import { supabase } from "../../../../utils/supabase/supabase";
import UpdateForm from "./updateform";
import Link from "next/link";
import SetDescription from "./description";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Description</h1>
      <SetDescription></SetDescription>
      {/* <UpdateForm></UpdateForm> */}
      <Link
        href="/"
        className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Done
      </Link>
    </div>
  );
}
