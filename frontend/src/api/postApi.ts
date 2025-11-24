
import { api } from "./axiosclient";

export const createPostApi = (data) => {
  return api.post("/post", data); // your backend endpoint
};
