import { useNavigate } from "react-router-dom";
import { logout } from "../endpoints/api";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      navigate("/login");
    }
  };

  handleLogout();

  return null;
};

export default Logout;
