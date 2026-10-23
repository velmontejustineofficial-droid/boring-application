import { supabase } from "./SupabaseService";

const getRedirectURL = () => {
  const baseURL = import.meta.env.VITE_SITE_URL || window.location.origin;

  return `${baseURL.replace(/\/+$/, "")}/user`;
};

export async function loginWithFigma() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "figma",
    options: {
      redirectTo: getRedirectURL(),
    },
  });

  if (error) {
    throw error;
  }

  return data;
}