import { z } from "zod";

export const CheckEmailSchema = z.object({
  email: z.string().email(),
});

export const LogInSchema = z.object({
  email: z.string().email(),
  password: z.string().nonempty("This field is required"),
});
