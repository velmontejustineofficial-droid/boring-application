
import { supabase } from "./SupabaseService";

export async function loginWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${window.location.origin}/user`,
    },
  });

  if (error) {
    throw error;
  }
  
  return data;
}

export const logoutGithub = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Logout failed:", error.message);
    return;
  }
};