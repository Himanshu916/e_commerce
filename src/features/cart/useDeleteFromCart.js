import { useMutation } from "@tanstack/react-query";
import { useUser } from "../authentication/useUser";
import { deleteFromCart as deleteFromCartApi } from "../../services/apiCart";

export function useDeleteFromCart() {
  const { user } = useUser();
  const { mutate: deleteFromCart } = useMutation({
    mutationFn: () => deleteFromCartApi(user.id),
    onSuccess: () => {
      console.log("item is deleted");
    },
    onError: () => {
      console.log("item is deleted");
    },
  });
  return { deleteFromCart };
}
