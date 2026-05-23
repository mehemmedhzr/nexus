import z from "zod";

export const registerSchema = z.object({
    username: z.string().min(1, {message: "Username is required"}),
    email: z.email({message: "Invalid email"}),
    password: z.string().min(8, {message: "Password must be at least 8 characters"})
})

export type RegisterFormValues = z.infer<typeof registerSchema>;