import { create } from "zustand";
import { authApi } from "@/api/authApi.ts";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string;
  fetchUser: () => Promise<void>;
  signIn: (credentials: { email: string; password: string }) => Promise<boolean>;
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
      set({ user: res.data.user, loading: false });
    } catch (err) {
      set({ user: null, loading: false });
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
    } catch {}
    set({ user: null, loading: false });
  },
}));
