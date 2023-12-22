import { useMutation } from "@tanstack/react-query";
import { useUser } from "../authentication/useUser";
import { updateCart as updateCartApi } from "../../services/apiCart";

export function useUpdateCart() {
  const { user } = useUser();

  const { mutate: updateCart, isLoading } = useMutation({
    mutationFn: (updatedCart) =>
      updateCartApi({ updatedCart, userId: user.id }),
    onSuccess: (data) => {
      console.log(data, "after updating cart");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return { updateCart, isLoading };
}
