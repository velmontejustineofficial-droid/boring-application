
import { supabase } from "./SupabaseService";

export async function loginWithFigma() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'figma',
    options: {
      redirectTo: `${window.location.origin}/user`,
    },
  });

  if (error) {
    throw error;
  }

  return data;
}