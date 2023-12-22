import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login", { replace: true });
    },
    [isAuthenticated, isLoading, navigate]
  );
  if (isLoading) return <p>Loading ...</p>;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
