import z from "zod";

export const forgotPasswordSchema = z.object({
    email: z.email({message: "Invalid email"})
})

export type ForgotPasswordFormType = z.infer<typeof forgotPasswordSchema>