import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { is_authenticated, login, register } from "../endpoints/api";
import { useNavigate } from "react-router-dom";
import { useAlert } from "./useAlerts";

type AuthContextType = {
  isAuthenticated: boolean;
  loading: boolean;
  login_user: (username: string, password: string) => Promise<boolean>;
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
  login_user: async () => false,
  register_user: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { showAlert } = useAlert();

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
      return true;
    }
    return false;
  };

  const register_user = async (
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    if (password !== confirmPassword) {
      showAlert("Passwords don't match!", "error");
      return;
    }
    try {
      await register(username, email, password);
      showAlert("Registration successful! You can now log in.", "success");
      navigate("/login");
    } catch {
      showAlert("Registration failed. Please try again.", "error");
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