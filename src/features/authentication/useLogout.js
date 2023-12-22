import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      localStorage.removeItem("cart");
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return { logout, isLoading };
}
