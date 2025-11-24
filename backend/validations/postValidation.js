import z from 'zod'

export const postSchema = z.object({
    content: z.string().min(2,"Name too short").max(300,"Name too long"),
})
