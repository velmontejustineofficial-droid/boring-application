
import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import {
  loginWithGithub,
  logoutGithub,
} from "../service/GithubService";

const AuthContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export function getContext() {
  return AuthContext;
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authenticate, setAuthenticate] = useState(false);


  const navigate = useNavigate();


  const login = async () => {
    try {
      await loginWithGithub();
    } catch (error) {
      console.error("GitHub login failed:", error);
    }
  };

  const logout = async () => {
    try {
      await logoutGithub();
      setUser(null);
      setAuthenticate(false);
      navigate("/auth/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const value = {
    user,
    isAuthenticated: authenticate,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
