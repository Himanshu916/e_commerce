import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";
import { useUser } from "../authentication/useUser";

export function useCart() {
  const { user } = useUser();

  const { data: cart, isLoading: isGettingCart } = useQuery({
    queryKey: ["carts"],
    queryFn: () => getCart(user.id),
  });
  console.log(cart, "what is hoing on");
  return { cart, isGettingCart };
}
