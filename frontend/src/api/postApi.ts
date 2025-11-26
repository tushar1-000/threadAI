
import { api } from "./axiosclient";

export const createPostApi = (data:{content:string} ) => {
  return api.post("/post", data); // your backend endpoint
};

export const getPostApi = (page =1 , limit = 10) =>{
  return api.get(`/post?page=${page}&limit=${limit}`)
}