import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/products", { replace: true });
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return { signup, isLoading };
}
