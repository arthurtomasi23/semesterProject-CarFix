import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ifxtifoyzazhfczenlgu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmeHRpZm95emF6aGZjemVubGd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxNzkwMjksImV4cCI6MjAwMjc1NTAyOX0.Pxnz_x-pcNADR_IsqEC34gyCeS6YQIzqgFXGjHcaCNI"
);
