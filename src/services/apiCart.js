import { supabase } from "./supabase";

export async function getCart(id) {
  let { data: carts, error } = await supabase
    .from("carts")
    .select("*")
    .eq("userId", id);

  if (error) {
    throw new Error("cart not found");
  }

  return carts;
}

export async function addToCart({ product, id }) {
  const { data, error } = await supabase
    .from("carts")
    .insert([{ userId: id, cart: [product] }])
    .select();

  if (error) throw new Error("Cant update cart in server");

  return data;
}

export async function deleteFromCart(id) {
  const { error } = await supabase.from("carts").delete().eq("userId", id);
  if (error) throw new Error("could not delete");
}

export async function updateCart({ userId, updatedCart }) {
  const { data, error } = await supabase
    .from("carts")
    .update({ cart: updatedCart })
    .eq("userId", userId)
    .select();

  if (error) throw new Error("could not update cart");

  return data;
}
// const { data, error } = await supabase
//   .from('carts')
//   .insert([
//     { some_column: 'someValue', other_column: 'otherValue' },
//   ])
//   .select()

// const { data, error } = await supabase
//   .from('carts')
//   .update({ other_column: 'otherValue' })
//   .eq('some_column', 'someValue')
//   .select()

// const { error } = await supabase
//   .from('carts')
//   .delete()
//   .eq('some_column', 'someValue')
