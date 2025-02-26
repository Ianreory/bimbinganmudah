import { z } from "zod";

// Skema validasi dengan Zod
export const registerSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
  nama: z.string(),
});
