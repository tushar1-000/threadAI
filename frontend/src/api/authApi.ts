import { api } from "./axiosclient.ts";

export const authApi = {
  signIn: (data) => api.post("/user/signin", data,  { withCredentials: true } ),
  signUp: (data) => api.post("/user/signup", data),
};
