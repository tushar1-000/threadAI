import { create } from "zustand";
import { authApi } from "@/api/authApi.ts";

interface User {
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string;
  fetchUser: () => Promise<void>;
  signIn: (credentials: { email: string; password: string }) => Promise<boolean>;
  signUp:(credentials: { email: string; password: string  , name:string , confirmPassword:string}) => Promise<boolean>;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: "",

  // Fetch logged-in user (me API)
  fetchUser: async () => {
    set({ loading: true, error: "" });
    try {
      const res = await authApi.me();
      if("user" in res.data)
        set({ user: res.data.user, loading: false });
    } catch (err:unknown) {
      set({ user: null, loading: false });
      console.log(err)
    }
  },

  // SignIn
  signIn: async (credentials) => {
    set({ loading: true, error: "" });
    try {
      const res = await authApi.signIn(credentials);
      set({
        user: res.data.user,
        loading: false,
      });
      return true; // matching Promise<boolean>
    } catch (err: any) {
      set({
        error: err?.response?.data?.message || "Invalid credentials",
        loading: false,
      });
      return false;
    }
  },

  // SignOut
  signOut: async () => {
    set({ loading: true });
    try {
      await authApi.signOut();
      set({ user: null, loading: false });
    } catch(err) {
        console.log(err)
    }
  },
    // SignIn
  signUp: async (credentials) => {
    set({ loading: true, error: "" });
    try {
      const res = await authApi.signUp(credentials);
      set({
        user: res.data.user,
        loading: false,
      });
      return true; // matching Promise<boolean>
    } catch (err) {
      set({
        error: err?.response?.data?.message || "Invalid credentials",
        loading: false,
      });
      return false;
    }
  },

}));
