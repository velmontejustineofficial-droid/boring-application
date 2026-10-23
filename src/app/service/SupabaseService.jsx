
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

export const logoutSupabase = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Logout failed:", error.message);
    return;
  }
};