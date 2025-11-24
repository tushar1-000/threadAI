import * as yup from "yup";

export const postSchema = yup.object({
   content: yup.string().required("Content is required").max(300 , 'Max 300 characters'),
});

export type PostInput = yup.InferType<typeof postSchema>;