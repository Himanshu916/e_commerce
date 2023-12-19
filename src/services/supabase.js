import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ehfvegnwdzydhhzqwhig.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoZnZlZ253ZHp5ZGhoenF3aGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzNjEwNDEsImV4cCI6MjAxNzkzNzA0MX0.HyshfBBhP6s1y88FP3jgFx2FfRBy_oxm5WO2npdmcVk";

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey);
