import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user, isLoading, isAuthenticated } = useUser();
  console.log(user, isLoading, isAuthenticated, "kya run hua");
  //   const isAuthenticated = user?.role === "authenticated";

  useEffect(
    function () {
      console.log(isAuthenticated, isLoading);
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );
  if (isLoading) return <p>Loading ...</p>;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
