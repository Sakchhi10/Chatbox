import { useAuth } from "../Component/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let location = useLocation();
  const { user } = useAuth();

  return (
    <>
      {user === null ? (
        <Navigate to="/LogIn" state={{ from: location }} replace />
      ) : (
        children
      )}
    </>
  );
};

export default ProtectedRoute;
