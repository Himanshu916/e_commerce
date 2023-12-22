import { useMutation } from "@tanstack/react-query";
import { addToCart as addToCartApi } from "../../services/apiCart";
import { useUser } from "../authentication/useUser";

export function useAddCart() {
  const { user } = useUser();
  const { mutate: addToCart, isLoading } = useMutation({
    mutationFn: (product) => addToCartApi({ id: user.id, product }),
    onSuccess: (data) => {
      console.log(data, "in useAddCart");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return { addToCart, isLoading };
}
