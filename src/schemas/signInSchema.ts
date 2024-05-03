import { z } from "zod";

export const signInSchema = z.object({
    identifier: z.string(), // We can say email or username to this identifier
    password: z.string(),
})