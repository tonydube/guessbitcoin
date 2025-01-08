import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { is_authenticated, login, register } from "../endpoints/api";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  isAuthenticated: boolean;
  loading: boolean;
  login_user: (username: string, password: string) => Promise<void>;
  register_user: (
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  loading: true,
  login_user: async () => {},
  register_user: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const get_authenticated = async () => {
    try {
      const success = await is_authenticated();
      setIsAuthenticated(success);
    } catch {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const login_user = async (username: string, password: string) => {
    const success = await login(username, password);
    if (success) {
      setIsAuthenticated(true);
      navigate("/");
    }
  };

  const register_user = async (
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    if (password === confirmPassword) {
      const success = await register(username, email, password);
    } else {
      alert("Passwords don't match!");
    }
  };

  useEffect(() => {
    get_authenticated();
  }, [window.location.pathname]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loading, login_user, register_user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
