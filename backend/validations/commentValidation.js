import z from 'zod';

export const commentSchema = z.object({
    comment: z.string().max(50,"Comment too long"),
})
