import z from 'zod'

export const postSchema = z.object({
    title: z.string().min(2,"Name too short").max(30,"Name too long"),
    content: z.string().min(2,"Name too short").max(150,"Name too long"),
})
