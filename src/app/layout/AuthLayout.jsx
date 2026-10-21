import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router";
import { supabase } from "../service/SupabaseService";

export default function AuthLayout() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function checkSession() {
      const { data, error } = await supabase.auth.getSession();

      if (!active) return;

      if (error) {
        console.error("Session check failed:", error.message);
        setSession(null);
      } else {
        setSession(data.session);
      }

      setLoading(false);
    }

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      if (!active) return;

      setSession(newSession);
      setLoading(false);
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <div>Checking authentication...</div>;
  }

  if (session) {
    return <Navigate to="/user" replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}