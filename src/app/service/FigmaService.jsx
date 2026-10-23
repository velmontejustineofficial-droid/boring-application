
import { supabase } from "./SupabaseService";

export async function loginWithFigma() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'figma',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  if (error) {
    throw error;
  }

  return data;
}