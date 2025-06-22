import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(5, "message must have at least 5 characters")
    .max(300, "content must have at most 300 characters"),
});
