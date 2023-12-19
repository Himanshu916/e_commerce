import { supabase, supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
        cart: [],
        wishlist: [],
      },
    },
  });

  if (error) throw new Error("Could not sign up");

  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error("please provide correct email or password");
  console.log(data, "in login api");
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) throw new Error(error);

  return user;
}

export async function updateCurrentUser({ fullName, password, avatar }) {
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error("Could not update data");

  if (!avatar) return data;

  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: stoargeError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (stoargeError) throw new Error("nahi hui upload");

  const { data2: updatedUser, error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error("final update");
  return updatedUser;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error);
}
