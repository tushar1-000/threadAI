import z from 'zod'

export const signupSchema = z.object({
    name: z.string().min(2,"Name too short").max(30,"Name too long"),
    email: z.string().email("Invalid email"),
    password: z.string().min(5,"Password too short").max(30,"Password too long"),
    confirmPassword: z.string().min(5,"Password too short").max(30,"Password too long"),
    
}).refine((data)=>data.password === data.confirmPassword , {
    message:"Password doesn't match",
    path:["confirmPassword"]
} )


export const signinSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(5,"Password too short").max(30,"Password too long"),
})