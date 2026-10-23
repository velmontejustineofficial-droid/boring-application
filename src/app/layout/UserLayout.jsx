
// import "./css/UserLayout.css";

// import { useEffect, useState } from "react";
// import { Outlet, Navigate } from "react-router";

// import UserHeader from "./components/user/UserHeader";
// import UserSidebar from "./components/user/UserSidebar";
// import { supabase } from "../service/SupabaseService";

// export default function UserLayout() {
//   const [session, setSession] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let active = true;

//     async function checkSession() {
//       try {
//         const { data, error } = await supabase.auth.getSession();

//         if (error) {
//           throw error;
//         }

//         if (active) {
//           setSession(data.session);
//         }
//       } catch (error) {
//         console.error("Session check failed:", error.message);

//         if (active) {
//           setSession(null);
//         }
//       } finally {
//         if (active) {
//           setLoading(false);
//         }
//       }
//     }

//     checkSession();

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, newSession) => {
//       setSession(newSession);
//       setLoading(false);
//     });

//     return () => {
//       active = false;
//       subscription.unsubscribe();
//     };
//   }, []);

//   if (loading) {
//     return (
//       <div className="user-layout-loading">
//         Checking authentication...
//       </div>
//     );
//   }

//   if (!session) {
//     return <Navigate to="/auth/login" replace />;
//   }

//   return (
//     <div className="user-layout">
//       <UserHeader />

//       <div className="user-layout-body">
//         <UserSidebar />

//         <main className="user-layout-content">
//           <Outlet context={{ user: session.user  }} />
//         </main>
//       </div>
//     </div>
//   );
// }


import "./css/UserLayout.css";

import { Outlet } from "react-router";

import UserHeader from "./components/user/UserHeader";
import UserSidebar from "./components/user/UserSidebar";

export default function UserLayout() {
  // Temporary default user for debugging
  const user = {
    id: "debug-user",
    email: "debug@example.com",
    role: "user",
  };

  return (
    <div className="user-layout">
      <UserHeader />

      <div className="user-layout-body">
        <UserSidebar />

        <main className="user-layout-content">
          <Outlet context={{ user }} />
        </main>
      </div>
    </div>
  );
}
