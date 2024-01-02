import { supabase } from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) throw new Error("Could not get products.");

  return data;
}

export async function getProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error("could not get product");
  return data;
}

export async function uploadProducts(products) {
  console.log(products, "hai kya yha");

  const { data, error } = await supabase
    .from("products")
    .insert(products)
    .select();

  if (error) throw new Error(error);
  return data;
}
