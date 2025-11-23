import { api } from "./axiosclient.ts";
import type { AuthResponse } from "@/types/auth.ts";
import type { SignInInput } from "@/schema/signin.schema.ts";
import  type { SignUpInput } from "@/schema/signup.schema.ts";


export const authApi = {
  signIn: (data: SignInInput) => api.post("/auth/signin", data, ),
  signUp: (data: SignUpInput) => api.post("/auth/signup", data),
  me: ()=> api.get<AuthResponse>("/auth/me" ),
  signOut:()=>api.get("/auth/logout")
};

