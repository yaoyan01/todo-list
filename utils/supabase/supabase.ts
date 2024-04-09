import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient("https://fdqykwdhjucqwiiehlxl.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkcXlrd2RoanVjcXdpaWVobHhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3NDkyNTEsImV4cCI6MjAyNzMyNTI1MX0.x9CLrIXhLcGaSb1ysOyuu6HyEw4jY2v5hZkMQvA3jSM");
        