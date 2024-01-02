import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadProducts } from "../../services/apiProducts";

export function useUploadProduct() {
  const queryClient = useQueryClient();
  const { mutate: uploadProduct, isLoading: isUploading } = useMutation({
    mutationFn: (products) => uploadProducts(products),
    onSuccess: () => {
      queryClient.setQueryData(["products"]);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return { uploadProduct, isUploading };
}
